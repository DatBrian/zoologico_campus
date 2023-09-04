import ClientError from "../../utils/ClientError.js";

class AuthController {
    constructor() {
        this.service = null;
    }

    async findUser(req, res) {
        try {
            if (!req.rateLimit) return;
            res.status(req.data.status).send(req.data);
        } catch (error) {
            new ClientError(400, "Error al obtener los Auth Controlador");
            throw error.message;
        }
    }

}
export default AuthController;
