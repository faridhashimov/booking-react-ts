import { Request, Response } from 'express'
import UserModel, { IUser } from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

type Credentials = Pick<IUser, 'name' | 'surname' | 'email' | 'password'>

const userRegister = async (req: Request, res: Response) => {
    const { name, surname, email, password }: Credentials = req.body
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const newUser = await UserModel.create({
            name,
            surname,
            email,
            password: hashedPassword,
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(404).json('Something went wrong, please check filled fields')
        console.log(error)
    }
}

const userLogin = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email,
        })
        if (!user) return res.status(404).json('Wrong email')

        const originalPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!originalPassword) return res.status(201).json('Wrong password')

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_PRIVATE_KEY!,
            {
                expiresIn: '3d',
            }
        )

        const { password, ...others } = user._doc

        res.cookie('access_token', accessToken, {
            httpOnly: true,
        })
            .status(201)
            .json({ ...others, accessToken })
    } catch (error) {
        res.status(404).json(
            'Something went wrong, please check email and password'
        )
        console.log(error)
    }
}

export { userRegister, userLogin }
