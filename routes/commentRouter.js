import { Router } from 'express'
import { commentController } from '..controllers/CommentController.js'


const router = new Router()

router.get('/', commentController.getComments)

router.post('/', commentController.createComment)

router.get('/:commentId', commentController.getComment)

router.delete('/:commentId', commentController.deleteComment)

router.patch('/:commentId', commentController.updateComment)

export { router }