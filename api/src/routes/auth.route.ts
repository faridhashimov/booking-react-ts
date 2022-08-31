import { Router } from 'express'
import { userRegister, userLogin } from '../controllers/auth.controller'

const router = Router()

router.post('/register', userRegister)
router.post('/login', userLogin)


export default router