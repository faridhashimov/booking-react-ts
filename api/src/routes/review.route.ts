import { Router } from 'express'
import {
    addNewReview,
    deleteReview,
    updateReview,
} from '../controllers/review.controller'
import { verifyToken, verifyTokenAndUser } from '../utils/verifyToken.util'

const router = Router()

router.post('/:propertyId/:userId', verifyToken, addNewReview)
router.put('/:propertyId/:reviewId', verifyTokenAndUser, updateReview)
router.delete('/:propertyId/:reviewId', verifyTokenAndUser, deleteReview)
export default router
