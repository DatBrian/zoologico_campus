import JornadasService from "../../services/JornadasService.js";
import ClientError from "../../utils/ClientError.js";

class JornadasController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new JornadasService();
            const Jornadas = await this.service.getAll();
            res.json(Jornadas);
        } catch (error) {
            new ClientError(400, "Error al obtener los Jornadas Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new JornadasService();
            const animal = await this.service.getById(req.query.id);
            res.json(animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los Jornadas Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new JornadasService();
            const response = await this.service.insertOne(req.body);
            res,json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Jornadas Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new JornadasService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los Jornadas Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service = new JornadasService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Jornadas Controlador");
            throw error.message;
        }
    }
}
export default JornadasController;