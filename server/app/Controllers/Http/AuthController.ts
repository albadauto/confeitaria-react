import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user';

export default class AuthController {
    public async verifyPassword({ request, response, auth }: HttpContextContract) {
        try {
            const { email, password } = request.body();
            const token = await auth.attempt(email, password);
            return response.status(200).json({
                token
            })
        } catch {
            return response.status(400).json({
                message: "User not found!"
            })
        }
    }

    public async createNewUser({ request, response }: HttpContextContract) {
        try {
            const body = request.body();
            await User.create(body);
            return response.status(200).json({
                error: false,
                message: "Usuário criado com sucesso!"
            })
        } catch (error) {
            console.log(error);
        }
    }
}
