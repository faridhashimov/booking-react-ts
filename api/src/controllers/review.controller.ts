import { Request, Response } from 'express'
import PropertyModel from '../models/property.model'
import ReviewModel from '../models/reviews.model'

// Add new review to the property
const addNewReview = async (req: Request, res: Response) => {
    try {
        const newReview = await ReviewModel.create(req.body)
        const property = await PropertyModel.findById(req.params.propertyId)
        property?.reviews.push(newReview)
        await property?.save()
        res.status(201).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete review to the property
const deleteReview = async (req: Request, res: Response) => {
    try {
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId },
            {
                $pull: {
                    reviews: { _id: req.params.reviewId },
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

// Update review to the property
const updateRreview = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findById(req.params.reviewId)
        if (property) {
            if (property?.reviews.find((r) => r.userId === req.params.userId)) {
                return res
                    .status(400)
                    .json('You are already submitted a review')
            }
        }
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId, 'review._id': req.params.reviewId },
            {
                $set: {
                    'rooms.$.username': req.body.username,
                    'rooms.$.photo': req.body.photo,
                    'rooms.$.positive': req.body.positive,
                    'rooms.$.negative': req.body.negative,
                    'rooms.$.rate': req.body.rate,
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

export { addNewReview, deleteReview, updateRreview }
