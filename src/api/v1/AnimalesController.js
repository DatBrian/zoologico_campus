import AnimalesService from "../../services/AnimalesService.js";
import ClientError from "../../utils/ClientError.js";

class AnimalesController{
    constructor(){
        this.service = new AnimalesService();
    }

    async getAll(_req, res){
        try {
            const animales = await this.service.getAll();
            res.json(animales);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            const response = await this.service.insertOne(req.body);
            res,json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los animales Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los animales Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los animales Controlador");
            throw error.message;
        }
    }
}
export default AnimalesController;