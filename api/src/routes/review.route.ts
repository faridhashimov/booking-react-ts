import { Router } from 'express'
import {addNewReview,deleteReview,updateRreview } from '../controllers/review.controller'
import { verifyToken, verifyTokenAndUser } from '../utils/verifyToken.util'

const router = Router()

router.delete('/:propertyId/:roomId', verifyTokenAndUser, deleteReview)
router.put('/:propertyId/:roomId', verifyTokenAndUser, updateRreview)
router.post('/:propertyId', verifyToken, addNewReview)
export default router
