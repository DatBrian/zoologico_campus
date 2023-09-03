import {
        ObjectId
} from "mongodb";
import EventosRepository from "../repositories/EventosRepository.js";
import ClientError from "../utils/ClientError.js";

class EventosService {
        constructor() {
                this.repository = null;
        }

        async getAll() {
                this.repository = new EventosRepository();
                return await this.repository.getAll();
        }
        async getById(id) {
                this.repository = new EventosRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async insertOne(body) {
                this.repository = new EventosRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new EventosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new EventosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default EventosService;