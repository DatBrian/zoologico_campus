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
    async insertOne(body) {
        try {
            await this.connect();
            await this.getDatabase().collection(this.entity).insertOne(body);
            return `${this.entity} inserted successfully`
        } catch (error) {
            new ClientError(304, `Error al ingresar la data en ${this.entity}`);
            throw error.message;
        }
    }
    async updateOne(id, body) {
        try {
            await this.connect();
            await this.getDatabase().collection(this.entity).updateOne({
                "_id": id
            }, {
                $set: body
            });
            return `${this.entity} updated successfully`
        } catch (error) {
            new ClientError(304, `Error al actualizar la data en ${this.entity}`);
            throw error.message;
        }
    }
    async deleteOne(id) {
        try {
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne(id);
            return `${this.entity} deleted succesfully`
        } catch (error) {
            new ClientError(400, `Error al borrar la data en ${this.entity}`);
        }
    }
}
export default PasesRepository;