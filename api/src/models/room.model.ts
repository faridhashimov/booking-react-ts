import { model, Document, Schema } from 'mongoose'

export interface IRoom {
    roomType: string
    // How many room of this type are there in the hotel
    roomQuantity: number
    bedTypes: string[]
    roomFacilities: string[]
    sleeps: number
    lastPrice: number
    actualPrice: number
    cancellation: string
    payment: string
    breakfast: string
    unavailableDates: [Date]
}

export interface IRoomDocument extends IRoom, Document {
    createdAt: Date
    updatedAt: Date
}

export const RoomSchema = new Schema<IRoomDocument>(
    {
        roomType: { type: String, required: true },
        roomQuantity: { type: Number, required: true },
        bedTypes: { type: [String], required: true },
        roomFacilities: { type: [String], required: true },
        sleeps: { type: Number, required: true, default: 2 },
        lastPrice: { type: Number, required: true },
        actualPrice: { type: Number, required: true },
        cancellation: { type: String, required: true },
        payment: { type: String },
        breakfast: { type: String },
        unavailableDates: { type: [Date] },
    },
    {
        timestamps: true,
    }
)

const RoomModel = model<IRoomDocument>('Room', RoomSchema)
export default RoomModel
