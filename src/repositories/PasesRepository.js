import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class PasesRepository extends Connection {
    constructor() {
        super();
        this.entity = "pases";
    }

    async getAll() {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project: {
                    "_id": 0,
                    "id": "$_id",
                    "name": "$nombre",
                    "type": "$tipo",
                    "description": "$descripcion",
                    "zone": "$zonas",
                    "prices": "$precios",
                    "schedule": "$horario",
                    "days_opening": "$dias",
                }
            }]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getAllLess() {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {
                        precios:{
                            $lte:30000
                        }
                    }
                },
                {
                $project: {
                    "_id": 0,
                    "id": "$_id",
                    "name": "$nombre",
                    "type": "$tipo",
                    "description": "$descripcion",
                    "zone": "$zonas",
                    "prices": "$precios",
                    "schedule": "$horario",
                    "days_opening": "$dias",
                }
            }]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getAllTotalPass() {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {
                        zonas:"Zona Norte"
                    }
                },
                {
                $project: {
                    "_id": 0,
                    "id": "$_id",
                    "name": "$nombre",
                    "type": "$tipo",
                    "description": "$descripcion",
                    "zone": "$zonas",
                    "prices": "$precios",
                    "schedule": "$horario",
                    "days_opening": "$dias",
                }
            }]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getById(id) {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                    $match: {
                        "_id": id
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "id": "$_id",
                        "name": "$nombre",
                        "type": "$tipo",
                        "description": "$descripcion",
                        "zone": "$zonas",
                        "prices": "$precios",
                        "schedule": "$horario",
                        "days_opening": "$dias",
                    }
                }
            ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByTipo(tipo) {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $match: {
                    tipo: tipo
                }
                },
                {
                    $project: {
                        "_id": 0,
                        "id": "$_id",
                        "name": "$nombre",
                        "type": "$tipo",
                        "description": "$descripcion",
                        "zone": "$zonas",
                        "prices": "$precios",
                        "schedule": "$horario",
                        "days_opening": "$dias",
                    }
                }
            ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async insertOne(body) {
            await this.connect();
            await this.getDatabase().collection(this.entity).insertOne(body);
            const response = {
                status: 200,
                message: `Inserted Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
    async updateOne(id, body) {
            await this.connect();
            await this.getDatabase().collection(this.entity).updateOne({
                "_id": id
            }, {
                $set: body
            });
            const response = {
                status: 200,
                message: `Updated Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
    async deleteOne(id) {
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne({"_id": id});
            const response = {
                status: 200,
                message: `Deleted Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
}
export default PasesRepository;