import { Request, Response } from 'express'
import PropertyModel from '../models/property.model'
import RoomModel from '../models/room.model'

// Add new room to the property
const addNewRoom = async (req: Request, res: Response) => {
    try {
        const newRoom = await RoomModel.create(req.body)
        const property = await PropertyModel.findById(req.params.propertyId)
        property?.rooms.push(newRoom)
        await property?.save()
        const lowestPrice = await PropertyModel.aggregate([
            {
                $unwind: '$rooms',
            },
            {
                $project: {
                    _id: 0,
                    'rooms.actualPrice': 1,
                    'rooms.roomType': 1,
                    'rooms.bedTypes': 1,
                    'rooms.lastPrice': 1,
                },
            },
            {
                $sort: {
                    'rooms.actualPrice': 1,
                },
            },
            {
                $limit: 1,
            },
        ])
        const updatedProperty = await PropertyModel.findByIdAndUpdate(
            { _id: req.params.propertyId },
            {
                $set: {
                    cheapestRoom: {
                        roomType: lowestPrice[0].rooms.roomType,
                        bedType: lowestPrice[0].rooms.bedTypes[0],
                        lastPrice: lowestPrice[0].rooms.lastPrice,
                        actualPrice: lowestPrice[0].rooms.actualPrice,
                    },
                },
            },
            { new: true }
        )
        res.status(201).json(updatedProperty)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete room to the property
const deleteRoom = async (req: Request, res: Response) => {
    try {
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId },
            {
                $pull: {
                    rooms: { _id: req.params.roomId },
                },
            },
            {
                new: true,
            }
        )
        res.status(201).json(updatedProperty)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Update room to the property
const updateRoom = async (req: Request, res: Response) => {
    try {
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId, 'rooms._id': req.params.roomId },
            {
                $set: {
                    'rooms.$.roomType': req.body.roomType,
                    'rooms.$.bedTypes': req.body.bedTypes,
                    'rooms.$.roomFacilities': req.body.roomFacilities,
                    'rooms.$.sleeps': req.body.sleeps,
                    'rooms.$.lastPrice': req.body.lastPrice,
                    'rooms.$.actualPrice': req.body.actualPrice,
                    'rooms.$.cancellation': req.body.cancellation,
                    'rooms.$.payment': req.body.payment,
                    'rooms.$.breakfast': req.body.breakfast,
                    'rooms.$.maxPeople': req.body.maxPeople,
                    'rooms.$.unavailableDates': req.body.unavailableDates,
                    'rooms.$.updatedAt': Date.now(),
                },
            },
            {
                new: true,
            }
        )
        res.status(201).json(updatedProperty)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export { addNewRoom, deleteRoom, updateRoom }