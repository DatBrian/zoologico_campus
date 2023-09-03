import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class ServiciosRepository extends Connection {
    constructor() {
        super();
        this.entity = "servicios";
    }

    async getAll() {
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project: {
                    "_id": 0,
                    "id": "$_id",
                    "producto": "$producto",
                    "descripcion": "$descripcion",
                    "cantidad": "$cantidad",
                    "precio": "$precio",
                    "area": "$area",
                    "zona": "$zona",
                    "horario_apertura": "$horario_apertura",
                    "horario_cierre": "$horario_cierre"
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
                        "producto": "$producto",
                        "descripcion": "$descripcion",
                        "cantidad": "$cantidad",
                        "precio": "$precio",
                        "area": "$area",
                        "zona": "$zona",
                        "horario_apertura": "$horario_apertura",
                        "horario_cierre": "$horario_cierre"
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
            return `${this.entity} inserted successfully`
    }
    async updateOne(id, body) {
            await this.connect();
            await this.getDatabase().collection(this.entity).updateOne({
                "_id": id
            }, {
                $set: body
            });
            return `${this.entity} updated successfully`
    }
    async deleteOne(id) {
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne({"_id": id});
            return `${this.entity} deleted succesfully`
    }
}
export default ServiciosRepository;