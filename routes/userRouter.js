import { Router } from 'express'
import { userController } from '../controllers/UserController.js'
import { registerValidation } from '../utils/validations.js'
import validationMiddleware from '../middleware/validationMiddleware.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router()

router.post('/registration', registerValidation, validationMiddleware ,userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

export { router }