import { Request, Response } from 'express'
import UserModel from '../models/user.model'
import bcrypt from 'bcryptjs'

// Get all users from db
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({})
        res.status(201).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
}

// Get single user from db
const getUser = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.userId)
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
}

// Update user
const updateUser = async (req: Request, res: Response) => {
    const { password, ...others } = req.body
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = await UserModel.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    ...others,
                    password: hashedPassword,
                },
            },
            {
                new: true,
            }
        )
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
}

// Delete user
const deleteUser = async (req: Request, res: Response) => {
    try {
        await UserModel.findByIdAndDelete(req.params.userId)
        res.status(201).json('Profile has been deleted')
    } catch (error) {
        res.status(404).json(error)
    }
}

export { getAllUsers, getUser, updateUser, deleteUser }
