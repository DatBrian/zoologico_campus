import {
        ObjectId
} from "mongodb";
import AnimalesRepository from "../repositories/AnimalesRepository.js";

class AnimalesService {
        constructor() {
                this.repository = null;
        }
        async getAll() {
                this.repository = new AnimalesRepository();
                return await this.repository.getAll();
        }
        async getById(id) {
                this.repository = new AnimalesRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async getByAlphabeticOrder() {
                this.repository = new AnimalesRepository();
                return await this.repository.getByAlphabeticOrder();
        }
        async getByClass(clase) {
                this.repository = new AnimalesRepository();
                return await this.repository.getByClass(clase);
        }
        async getBySubClass(sub_clase) {
                this.repository = new AnimalesRepository();
                return await this.repository.getBySubClass(sub_clase);
        }
        async getBySubClassEstado(sub_clase, estado) {
                this.repository = new AnimalesRepository();
                return await this.repository.getBySubClassEstado(sub_clase, estado);
        }
        async getByZone(zona) {
                this.repository = new AnimalesRepository();
                return await this.repository.getByZone(zona);
        }
        async insertOne(body) {
                this.repository = new AnimalesRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new AnimalesRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new AnimalesRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default AnimalesService;