import { verify } from "jsonwebtoken";
async function authenticateMiddleware(request, response, next_function) {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.sendStatus(400);
    } else {
        const token = authorization.replace("Bearer ", "").trim();
        try {
            const payload = await verify(token, process.env.JWT_SECRET);
            if (!payload) {
                return response.sendStatus(400);
            } else {
                request.userId = payload.id;
                return next_function();
            }
        } catch (error) {
            return response
                .status(500)
                .json({
                    message: error.message ||
                        "Erro interno durante a tentativa de autenticação.",
                });
        }
    }
}

export { authenticateMiddleware };