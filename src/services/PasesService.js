import {
        ObjectId
} from "mongodb";
import PasesRepository from "../repositories/PasesRepository.js";

class PasesService {
        constructor() {
                this.repository = null;
        }
        async getAll() {
                this.repository = new PasesRepository();
                return await this.repository.getAll();
        }
        async getAllLess() {
                this.repository = new PasesRepository();
                return await this.repository.getAllLess();
        }
        async getAllTotalPass() {
                this.repository = new PasesRepository();
                return await this.repository.getAllTotalPass();
        }
        async getById(id) {
                this.repository = new PasesRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async getByTipo(tipo) {
                this.repository = new PasesRepository();
                return await this.repository.getByTipo(tipo);
        }
        async insertOne(body) {
                this.repository = new PasesRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new PasesRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new PasesRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default PasesService;