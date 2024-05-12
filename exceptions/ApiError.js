export class ApiError extends Error {
    status

    errors

    constructor(status, message, errors = []){

        super(message)
        this.status = status
        this.errors = errors
    }

    static unauthorizedError(){
        return new ApiError(401, 'User is not authorised')
    }

    static badRequest(message, errors = []){
        return new ApiError(400, message, errors)
    }

    static forbidden() {
        return new ApiError(403, 'Access denied')
    }
}