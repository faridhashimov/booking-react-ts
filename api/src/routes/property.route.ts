import { Router } from 'express'
import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertiesByCountry,
    getPropertiesByCities,
    getProperty,
    updateProperty,
} from '../controllers/property.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken.util'

const router = Router()

router
    .route('/')
    .post(verifyTokenAndAdmin, createProperty)
    .get(getAllProperties)

router.get('/country', getPropertiesByCountry)
router.get('/cities', getPropertiesByCities)

router
    .route('/:propertyId')
    .get(getProperty)
    .put(verifyTokenAndAdmin, updateProperty)
    .delete(verifyTokenAndAdmin, deleteProperty)

export default router
