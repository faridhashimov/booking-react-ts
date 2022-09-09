import { Router } from 'express'
import {
    addNewCity,
    getAllCities,
    getCity,
    updateCity,
} from '../controllers/city.controller'

const router = Router()

router.route('/').post(addNewCity).get(getAllCities)
router.route('/exact').get(getCity)
router.put('/:cityId', updateCity)

export default router
