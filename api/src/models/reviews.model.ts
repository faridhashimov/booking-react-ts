import { model, Document, Schema } from 'mongoose'

export interface IReview {
    userId: string
    title: string
    username: string
    nationality: string
    countryCode: string
    photo: string
    positive: string
    negative: string
    rate: number
}

export interface IReviewDocument extends IReview, Document {
    createdAt: Date
    updatedAt: Date
}

export const ReviewSchema = new Schema<IReviewDocument>(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        username: { type: String, required: true },
        nationality: { type: String, required: true },
        countryCode: { type: String },
        photo: { type: String },
        positive: { type: String },
        negative: { type: String },
        rate: { type: Number, min: 0, max: 10 },
    },
    {
        timestamps: true,
    }
)

const ReviewModel = model<IReviewDocument>('Review', ReviewSchema)
export default ReviewModel
