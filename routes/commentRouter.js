import { Router } from 'express'
import { commentController } from '../controllers/CommentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router()

router.get('/', commentController.getComments)

router.post('/', authMiddleware, commentController.createComment)

router.get('/:commentId', commentController.getComment)

router.delete('/:commentId', commentController.deleteComment)

router.patch('/:commentId', commentController.updateComment)

export { router }