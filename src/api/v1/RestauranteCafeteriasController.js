import RestauranteCafeteriasService from "../../services/RestauranteCafeteriasService.js";
import ClientError from "../../utils/ClientError.js";

class RestauranteCafeteriasController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new RestauranteCafeteriasService();
            const RestauranteCafeterias = await this.service.getAll();
            res.json(RestauranteCafeterias);
        } catch (error) {
            new ClientError(400, "Error al obtener los RestauranteCafeterias Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new RestauranteCafeteriasService();
            const animal = await this.service.getById(req.query.id);
            res.json(animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los RestauranteCafeterias Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new RestauranteCafeteriasService();
            const response = await this.service.insertOne(req.body);
            res,json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los RestauranteCafeterias Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new RestauranteCafeteriasService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los RestauranteCafeterias Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service = new RestauranteCafeteriasService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los RestauranteCafeterias Controlador");
            throw error.message;
        }
    }
}
export default RestauranteCafeteriasController;