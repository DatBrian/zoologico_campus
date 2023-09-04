import {
        ObjectId
} from "mongodb";
import EmpleadosRepository from "../repositories/EmpleadosRepository.js";

class EmpleadosService {
        constructor() {
                this.repository = null;
        }
        async getAll() {
                this.repository = new EmpleadosRepository();
                return await this.repository.getAll();
        }
        async getById(id) {
                this.repository = new EmpleadosRepository();
                const objectId = new ObjectId(id);
                return await this.repository.getById(objectId);
        }
        async getBySchedule(jornada) {
                this.repository = new EmpleadosRepository();
                return await this.repository.getBySchedule(jornada);
        }
        async getByCargoArea(cargo, area_asignada) {
                this.repository = new EmpleadosRepository();
                console.log(cargo, area_asignada);
                return await this.repository.getByCargoArea(cargo, area_asignada);

        }
        async insertOne(body) {
                this.repository = new EmpleadosRepository();
                return await this.repository.insertOne(body);
        }
        async updateOne(id, body) {
                this.repository = new EmpleadosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.updateOne(objectId, body);
        }
        async deleteOne(id) {
                this.repository = new EmpleadosRepository();
                const objectId = new ObjectId(id)
                return await this.repository.deleteOne(objectId);
        }
}
export default EmpleadosService;