import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface IDecode {
    id: string
    isAdmin: boolean
    iat: number
    exp: number
}

interface RequestWithUserRole extends Request {
    user?: IDecode
}

export const verifyToken = (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction
) => {
    try {
        const accessToken: string = req.cookies.access_token
        if (!accessToken)
            return res.status(401).json('You are not authenticated!')
        jwt.verify(
            accessToken,
            process.env.JWT_PRIVATE_KEY!,
            (error: any, user: any) => {
                if (error) {
                    res.status(403).json('Token is not valid')
                }

                req.user = user
            }
        )
        next()
    } catch (error) {
        res.status(401).json(error)
        console.log(error)
    }
}

export const verifyTokenAndUser = (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction
) => {
    try {
        verifyToken(req, res, () => {
            if (req.user?.id === req.params.userId || req.user?.isAdmin) {
                next()
            } else {
                res.status(401).json('You are not allowed to do that')
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
}

export const verifyTokenAndAdmin = (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction
) => {
    try {
        verifyToken(req, res, () => {
            if (req.user?.isAdmin) {
                next()
            } else {
                res.status(401).json('You are not allowed to do that')
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
}
