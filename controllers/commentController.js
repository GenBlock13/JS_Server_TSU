import { commentService } from '../services/CommentService.js'
import { ApiError } from '../exceptions/ApiError.js'
class CommentController {
    async getComments(req, res, next) {
        try {
            const comments = await commentService.getAllComments()
            return res.json(comments)
        } catch (e) {
            next(e)
        }
    }

    async getComment(req, res, next) {
        try {
            const { commentId } = req.param

            const comment = await commentService.findComment(commentId)

            return res.json(comment)
        } catch (e) {
            next(e)
        }
    }

    async createComment(req, res, next) {
        try {
            const { text } = req.body

            const { id } = req.user

            const commentData = await commentService.createComment(id, text)

            return res.json(commentData)
        } catch (e) {
            next(e)
        }
    }

    async deleteComment(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async updateComment(req, res, next) {
        try {
            const { text } = req.body
            const { id } = req.user
            const { commentId }  = req.param
            const comment = await commentService.findComment(commentId)
            if (comment.userId != id) {
                throw ApiError.forbidden()
            }
            const commentData = await commentService.updateComment(commentId, text)
            return res.json(commentData)
        } catch (e) {
            next(e)
        }
    }
}

export const commentController = new CommentController()
