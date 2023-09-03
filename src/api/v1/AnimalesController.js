import AnimalesService from "../../services/AnimalesService.js";
import ClientError from "../../utils/ClientError.js";

class AnimalesController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service= new AnimalesService();
            const Animales = await this.service.getAll();
            res.json(Animales);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service= new AnimalesService();
            const Animal = await this.service.getById(req.query.id);
            res.json(Animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getByAlphabeticOrder(_req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesOrder = await this.service.getByAlphabeticOrder();
            res.json(AnimalesOrder);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service= new AnimalesService();
            const response = await this.service.insertOne(req.body);
            res.json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los animales Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service= new AnimalesService();
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
            this.service= new AnimalesService();
            console.log(req.query.id);
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los animales Controlador");
            throw error.message;
        }
    }
}
export default AnimalesController;