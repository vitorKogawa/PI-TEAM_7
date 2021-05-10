import { sign } from "jsonwebtoken";
import User from "../models/tb_usuario";
import authenticateConfig from "../config/authenticate.config";

class AuthController {
    async signin(request, response) {
        const { email, senha } = request.body;

        const userExists = await User.findOne({ where: { email } });

        if (!userExists) {
            return response.status(400).json({ message: "Usuário não existe!" });
        } else {
            if (!(await userExists.verifyPassword(senha))) {
                return response.status(400).json({ message: "Dados inválidos." });
            } else {
                const user = { id: userExists.id, name: userExists.name, ativo: userExists.ativo, status_adm: userExists.status_adm };
                const acessToken = sign(user, authenticateConfig.secret, {
                    expiresIn: authenticateConfig.expiresIn,
                });
                return response.status(200).json({ user, token: acessToken });
            }
        }
    }
}

export default new AuthController();