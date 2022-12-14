import { model, Document, Schema } from 'mongoose'
import { IReview, ReviewSchema } from './reviews.model'
import { IRoom, RoomSchema } from './room.model'

export type TCheapestRoom = {
    roomType: string
    bedType: string
    lastPrice: number
    actualPrice: number
}

export interface IProperty {
    propertyType: string
    star?: number
    name: string
    description: string
    country: String
    city: string
    cityPhoto: string
    photos: string[]
    cheapestRoom: TCheapestRoom
    adress: string
    distance: number
    cancellationPolicy: string
    meals: string
    funThingsToDo: string[]
    accessibility: string[]
    rooms: IRoom[]
    reviews: IReview[]
}

export interface IPropertyDocument extends IProperty, Document {
    createdAt: Date
    updatedAt: Date
}

export const PropertySchema = new Schema<IPropertyDocument>(
    {
        propertyType: { type: String, required: true },
        star: { type: Number, min: 1, max: 5 },
        name: { type: String, required: true },
        description: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        cityPhoto: { type: String },
        photos: { type: [String] },
        cheapestRoom: {
            roomType: { type: String },
            bedType: { type: String },
            lastPrice: { type: Number },
            actualPrice: { type: Number },
        },
        adress: { type: String, required: true },
        distance: { type: Number, required: true },
        cancellationPolicy: { type: String, required: true },
        meals: { type: String },
        funThingsToDo: { type: [String] },
        accessibility: { type: [String] },
        rooms: [RoomSchema],
        reviews: [ReviewSchema],
    },
    {
        timestamps: true,
    }
)

const PropertyModel = model<IPropertyDocument>('Property', PropertySchema)
export default PropertyModel
