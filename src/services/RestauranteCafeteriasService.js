import {
        ObjectId
} from "mongodb";
import RestauranteCafeteriasRepository from "../repositories/RestauranteCafeteriasRepository.js";

class RestauranteCafeteriasService {
        constructor() {
                this.repository = null;
        }
        async getAll() {
                this.repository = new RestauranteCafeteriasRepository();
                return await this.repository.getAll();
        }
        async getById(id) {
                this.repository = new RestauranteCafeteriasRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async insertOne(body) {
                this.repository = new RestauranteCafeteriasRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new RestauranteCafeteriasRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new RestauranteCafeteriasRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default RestauranteCafeteriasService;