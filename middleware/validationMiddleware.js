import { validationResult } from "express-validator"
import { ApiError } from "../exceptions/ApiError.js"

export default function(req, res, next){
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return next(ApiError.badRequest('Validations Error', errors.array()))
    }
    next()


}