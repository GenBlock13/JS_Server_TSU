import { Comment } from '../models/Comment.js'
import getUsername from '../utils/getUsername.js'

class CommentService {
    async getAllComments() {
        const comments = await Comment.findAll()
        return comments
    }

    async createComment(userId, commentText) {
        const username = await getUsername(userId)

        const comment = await Comment.create({username, userId, text: commentText})

        return comment
    }
}

export const commentService = new CommentService()