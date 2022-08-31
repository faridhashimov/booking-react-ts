import { Router } from 'express'
import { addNewRoom, deleteRoom, updateRoom } from '../controllers/room.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken.util'

const router = Router()

router.delete('/:propertyId/:roomId', verifyTokenAndAdmin, deleteRoom)
router.put('/:propertyId/:roomId', verifyTokenAndAdmin, updateRoom)
router.post('/:propertyId', verifyTokenAndAdmin, addNewRoom)
export default router
