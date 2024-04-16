import { commentService } from '../services/CommentService.js'

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

        } catch(e) {
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

        } catch (e) {
            next(e)
        }
    }
}

export const commentController = new CommentController()
