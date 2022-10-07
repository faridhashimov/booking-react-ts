import { Request, Response } from 'express'
import PropertyModel from '../models/property.model'
import RoomModel from '../models/room.model'

// Add new room to the property
const addNewRoom = async (req: Request, res: Response) => {
    try {
        const newRoom = await RoomModel.create(req.body)
        const property = await PropertyModel.findById(req.params.propertyId)
        if (property?.rooms.find((room) => room.roomType === req.body.roomType))
            return res.status(400).json('Room already added!')
        property?.rooms.push(newRoom)
        await property?.save()
        const rooms = property?.rooms.map((i) => i.actualPrice)
        const cheapestPrice = Math.min(...rooms!)
        const cheapestRoom = property?.rooms.find(
            (i) => i.actualPrice === cheapestPrice
        )
        const updatedProperty = await PropertyModel.findByIdAndUpdate(
            { _id: req.params.propertyId },
            {
                $set: {
                    cheapestRoom: {
                        roomType: cheapestRoom?.roomType,
                        bedType: cheapestRoom?.bedTypes[0],
                        lastPrice: cheapestRoom?.lastPrice,
                        actualPrice: cheapestRoom?.actualPrice,
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
                    'rooms.$.roomQuantity': req.body.roomQuantity,
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
        const property = await PropertyModel.findById(req.params.propertyId)
        const rooms = property?.rooms.map((i) => i.actualPrice)
        const cheapestPrice = Math.min(...rooms!)
        const cheapestRoom = property?.rooms.find(
            (i) => i.actualPrice === cheapestPrice
        )
        await PropertyModel.findByIdAndUpdate(
            { _id: req.params.propertyId },
            {
                $set: {
                    cheapestRoom: {
                        roomType: cheapestRoom?.roomType,
                        bedType: cheapestRoom?.bedTypes[0],
                        lastPrice: cheapestRoom?.lastPrice,
                        actualPrice: cheapestRoom?.actualPrice,
                    },
                },
            },
            { new: true }
        )
        res.status(201).json(updatedProperty)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// Reserve room
const reserveRoom = async (req: Request, res: Response) => {
    try {
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId, 'rooms._id': req.params.roomId },
            {
                $set: {
                    'rooms.$.roomType': req.body.roomType,
                    'rooms.$.roomQuantity': req.body.roomQuantity,
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

export { addNewRoom, deleteRoom, updateRoom, reserveRoom }
