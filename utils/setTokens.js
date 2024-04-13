import { tokenService } from "../services/TokenService.js"
import { UserDto } from "../dtos/UserDto.js"

export default async (user) => {
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...UserDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)
    return {
        ...tokens,
        user: userDto
    }
}