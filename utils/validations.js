import { body} from 'express-validator'

export const registerValidation = [
    body('email', 'Email not valid').isEmail(),
    body('password', 'Password must be longer than 4 symbols').isLength(
        {
            min: 4,
            max: 12,
        }
    ),
        body('name', 'Name must be longer than 3 symbols').isLength(
            {
                min: 3,
            }
        )

]

export const commentValidation = [
    body(
        'text',
        'Текст комментария должен быть не менее 5 и не более 500 символов'
    ).isLength({
        min: 5,
        max: 500,
    }),
]