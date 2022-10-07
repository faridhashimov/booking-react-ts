import { Request, Response } from 'express'
import PropertyModel from '../models/property.model'
import ReviewModel from '../models/reviews.model'
import UserModel from '../models/user.model'

// Add new review to the property
const addNewReview = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.userId)
        const property = await PropertyModel.findById(req.params.propertyId)
        if (property) {
            if (property?.reviews.find((r) => r.userId === req.params.userId)) {
                console.log(req.params.userId)
                return res
                    .status(400)
                    .json('You are already submitted a review')
            }
        }
        const newReview = await ReviewModel.create({
            userId: req.params.userId,
            username: user?.name,
            photo: user?.photo,
            ...req.body,
        })
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
const updateReview = async (req: Request, res: Response) => {
    try {
        const updatedProperty = await PropertyModel.findOneAndUpdate(
            { _id: req.params.propertyId, 'reviews._id': req.params.reviewId },
            {
                $set: {
                    'reviews.$.title': req.body.title,
                    'reviews.$.username': req.body.username,
                    'reviews.$.photo': req.body.photo,
                    'reviews.$.positive': req.body.positive,
                    'reviews.$.negative': req.body.negative,
                    'reviews.$.rate': req.body.rate,
                    'reviews.$.updatedAt': Date.now(),
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

export { addNewReview, deleteReview, updateReview }
