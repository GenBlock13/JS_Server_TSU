import { Router } from 'express'
import { commentController } from '../controllers/commentController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import validationMiddleware from '../middleware/validationMiddleware.js'
import { commentValidation } from '../utils/validations.js'

const router = new Router()

router.get('/', commentController.getComments)

router.post('/',
             authMiddleware,
             commentValidation,
             validationMiddleware,
             commentController.createComment)

router.get('/:commentId', commentController.getComment)

router.delete('/:commentId', authMiddleware, commentController.deleteComment)

router.patch('/:commentId', authMiddleware, commentController.updateComment)

export { router }