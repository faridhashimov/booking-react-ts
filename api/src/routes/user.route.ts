import { Router } from 'express'
import {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from '../controllers/user.controller'
import {
    verifyTokenAndAdmin,
    verifyTokenAndUser,
} from '../utils/verifyToken.util'

const router = Router()

router.get('/', verifyTokenAndAdmin, getAllUsers)
router
    .route('/:userId')
    .get(verifyTokenAndAdmin, getUser)
    .put(verifyTokenAndUser, updateUser)
    .delete(verifyTokenAndUser, deleteUser)

export default router
