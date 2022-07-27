import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async verifyPassword({ request, response, auth }: HttpContextContract){
        try{
            const { email, password } = request.body();
            const token = await auth.attempt(email, password);
            return response.status(200).json({
                token
            })
        }catch {
            return response.status(400).json({
                message: "User not found!"
            })
        }
    }
}
