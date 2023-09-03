import {
        ObjectId
} from "mongodb";
import ServiciosRepository from "../repositories/ServiciosRepository.js";

class ServiciosService {
        constructor() {
                this.repository = null;
        }
        async getAll() {
                this.repository = new ServiciosRepository();
                return await this.repository.getAll();
        }
        async getById(id) {
                this.repository = new ServiciosRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async getByAlphabeticOrder() {
                this.repository = new ServiciosRepository();
                return await this.repository.getByAlphabeticOrder();
        }
        async insertOne(body) {
                this.repository = new ServiciosRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new ServiciosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new ServiciosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default ServiciosService;