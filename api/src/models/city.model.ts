import { model, Document, Schema } from 'mongoose'

export interface ICity {
    city: string
    photo: string
}

export interface ICityDocument extends ICity, Document {
    createdAt: Date
    updatedAt: Date
}

export const CitySchema = new Schema<ICityDocument>(
    {
        city: { type: String, required: true },
        photo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const CityModel = model<ICityDocument>('City', CitySchema)
export default CityModel
