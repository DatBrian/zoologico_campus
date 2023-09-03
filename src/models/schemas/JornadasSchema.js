import ClientError from "../../utils/ClientError.js";

class JornadasSchema {
    constructor(database) {
        this.database = database;
        this.entity = "jornadas";
        this.collection = this.database.collection(this.entity);
    }

    async generateCollection() {
        try {
            await this.database.createCollection(this.entity, {
                capped: true,
                size: 10000,
                max: 10,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        additionalProperties: false,
                        required: ["nombre_jornada", "horario_entrada", "horario_salida"],
                        properties: {
                            _id: {
                                bsonType: 'objectId',
                            },
                            nombre_jornada: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description: "Debe informar el campo schedule y este debe ser un string"
                            },
                            horario_entrada: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "Debe informar el campo entry_time y este debe ser un string"
                            },
                            horario_salida: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "El campo departure_time debe ser un número y estar comprendido entre 0 y 9999"
                            }
                        }
                    }
                },
            });
        } catch (error) {
            new ClientError(`Error al generar la colección de ${this.entity}`);
            throw error.message;
        }
    }

    async createData() {
        try {
            await this.collection.insertMany([
                {
                    nombre_jornada: "Diurna",
                    horario_entrada: "06:00 am",
                    horario_salida: "02:30 pm",
                },
                {
                    nombre_jornada: "Madrugada",
                    horario_entrada: "03:00 am",
                    horario_salida: "11:30 am",
                },
                {
                    nombre_jornada: "Tarde",
                    horario_entrada: "02:00 pm",
                    horario_salida: "10:30 pm",
                },
                {
                    nombre_jornada: "Nocturna",
                    horario_entrada: "06:00 am",
                    horario_salida: "04:30 pm",
                },
                {
                    nombre_jornada: "Mañana",
                    horario_entrada: "10:30 am",
                    horario_salida: "07:00 pm",
                },
                {
                    nombre_jornada: "Cafeteria",
                    horario_entrada: "08:00 am",
                    horario_salida: "05:00 pm",
                },
                {
                    nombre_jornada: "Restaurante",
                    horario_entrada: "11:30 am",
                    horario_salida: "03:30 pm",
                },
            ]);
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar los datos de ${this.entity}`
            );
            throw error.message;
        }
    }
}
export default JornadasSchema;
