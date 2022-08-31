import { model, Document, Schema } from 'mongoose'

export interface IRoom {
    // propertyId: string
    roomType: string
    bedTypes: [string]
    roomFacilities: [string]
    sleeps: number
    lastPrice: number
    actualPrice: number
    cancellation: string
    payment: string
    breakfast: string
    // maxPeople: number
    unavailableDates: [Date]
}

export interface IRoomDocument extends IRoom, Document {
    createdAt: Date
    updatedAt: Date
}

export const RoomSchema = new Schema<IRoomDocument>(
    {
        // propertyId: { type: String, required: true },
        roomType: { type: String, required: true },
        bedTypes: { type: [String], required: true },
        roomFacilities: { type: [String], required: true },
        sleeps: { type: Number, required: true, default: 2 },
        lastPrice: { type: Number, required: true },
        actualPrice: { type: Number, required: true },
        cancellation: { type: String, required: true },
        payment: { type: String, required: true },
        breakfast: { type: String, required: true },
        // maxPeople: { type: Number, required: true },
        unavailableDates: { type: [Date] },
    },
    {
        timestamps: true,
    }
)

const RoomModel = model<IRoomDocument>('Room', RoomSchema)
export default RoomModel
