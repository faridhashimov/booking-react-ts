import { Router } from 'express'
import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getProperty,
    updateProperty,
} from '../controllers/property.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken.util'

const router = Router()

router
    .route('/')
    .post(verifyTokenAndAdmin, createProperty)
    .get(getAllProperties)

router
    .route('/:propertyId')
    .get(getProperty)
    .put(verifyTokenAndAdmin, updateProperty)
    .delete(verifyTokenAndAdmin, deleteProperty)

export default router
