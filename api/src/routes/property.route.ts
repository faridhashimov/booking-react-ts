import { Router } from 'express'
import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertiesByCountry,
    getPropertiesByCities,
    getProperty,
    updateProperty,
    getPropertyTypes,
    getPropertiesByType,
    getSelectedPropertyByType,
} from '../controllers/property.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken.util'

const router = Router()

router
    .route('/')
    .post(verifyTokenAndAdmin, createProperty)
    .get(getAllProperties)

router.get('/browsebytype', getPropertyTypes)
router.get('/featured', getPropertiesByType)
router.get('/selected', getSelectedPropertyByType)

router.get('/country', getPropertiesByCountry)
router.get('/cities', getPropertiesByCities)

router
    .route('/:propertyId')
    .get(getProperty)
    .put(verifyTokenAndAdmin, updateProperty)
    .delete(verifyTokenAndAdmin, deleteProperty)

export default router
