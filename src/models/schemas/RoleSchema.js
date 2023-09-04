import AutoIncrementSchema from "./AutoincrementSchema.js";

class RoleSchema {
    constructor(database) {
        this.database = database;
        this.entity = "role";
        this.Collection = database.collection(this.entity);
    }

    async generateCollection() {
        try {
            await this.database.createCollection(this.entity, {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        additionalProperties: false,
                        required: ["id", "nombre"],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            id: {
                                bsonType: "int",
                                description:
                                    "La cedula es obligatorio y tiene que se de tipo numerico",
                            },
                            nombre: {
                                bsonType: "string",
                                description:
                                    '{"status": "402", "message": "El nombre_usuario es obligatorio y solo resive letras"}',
                                pattern: "^[a-zA-Z ]+$",
                            },
                        },
                    },
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async createData() {
        try {
            await this.Collection.insertMany([
                {
                    id: Number(
                        await new AutoIncrementSchema(this.database).increment(
                            "rol"
                        )
                    ),
                    nombre: "admin",
                },
                {
                    id: Number(
                        await new AutoIncrementSchema(this.database).increment(
                            "rol"
                        )
                    ),
                    nombre: "usuario",
                },
            ]);
        } catch (error) {
            throw error;
        }
    }
}
export default RoleSchema;
