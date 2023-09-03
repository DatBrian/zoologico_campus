import PasesService from "../../services/PasesService.js";
import ClientError from "../../utils/ClientError.js";

class PasesController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new PasesService();
            const Pases = await this.service.getAll();
            res.json(Pases);
        } catch (error) {
            new ClientError(400, "Error al obtener los Pases Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new PasesService();
            const pase = await this.service.getById(req.query.id);
            res.json(pase);
        } catch (error) {
            new ClientError(400, "Error al obtener los Pases Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new PasesService();
            const response = await this.service.insertOne(req.body);
            res.json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Pases Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new PasesService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los Pases Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service = new PasesService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Pases Controlador");
            throw error.message;
        }
    }
}
export default PasesController;