import { Router } from 'express'
import {
    createProperty,
    getAllProperties,
} from '../controllers/property.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken.util'

const router = Router()

router
    .route('/')
    .post(verifyTokenAndAdmin, createProperty)
    .get(getAllProperties)

export default router
