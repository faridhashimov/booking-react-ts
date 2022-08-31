import { model, Document, Schema } from 'mongoose'

export interface IUser {
    name: string
    surname: string
    email: string
    password: string
    isAdmin: boolean
    photo: string
    phone: string
    birthdate: Date
    nationality: string
    gender: string
    adress: string
}

export interface UserDocument extends IUser, Document {
    createdAt: Date
    updatedAt: Date
    _doc: any
}

const UserSchema = new Schema<UserDocument>(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        photo: { type: String },
        phone: { type: String },
        birthdate: { type: Date },
        nationality: { type: String },
        gender: { type: String },
        adress: { type: String },
    },
    {
        timestamps: true,
    }
)

const UserModel = model<UserDocument>('User', UserSchema)
export default UserModel
