import ClientError from "../../utils/ClientError.js";

class ServiciosSchema {
    constructor(database) {
        this.database = database;
        this.entity = "servicios";
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
                        required: [
                            "producto",
                            "descripcion",
                            "cantidad",
                            "precio",
                            "area",
                            "zona",
                            "horario_apertura",
                            "horario_cierre",
                        ],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            producto: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo product y este debe ser un string",
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo description y este debe ser un string",
                            },
                            cantidad: {
                                bsonType: "int",
                                minimum: 0,
                                maximum: 9999,
                                pattern: "^[0-9,.#@\\s-]+$",
                                description:
                                    "El campo amount debe ser un número y estar comprendido entre 0 y 9999",
                            },
                            precio: {
                                bsonType: "int",
                                minimum: 0,
                                maximum: 9999999,
                                pattern: "^[0-9,.#@\\s-]+$",
                                description:
                                    "El campo price debe ser un número y estar comprendido entre 0 y 9999999",
                            },
                            area: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo belonging_area y este debe ser un string",
                            },
                            zona: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo zone y este debe ser un string",
                            },
                            horario_apertura: {
                                bsonType: "string",
                                description:
                                    "Debe informar el campo opening_hours y este debe ser un string",
                            },
                            horario_cierre: {
                                bsonType: "string",
                                description:
                                    "Debe informar el campo closing_time y este debe ser un string",
                            },
                        },
                    },
                },
            });
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar la colección de ${this.entity}`
            );
            throw error.message;
        }
    }

    async createData() {
        try {
            await this.collection.insertMany([
                {
                    producto: "Tour guiado",
                    descripcion: "Recorrido por el zoológico con guía experto",
                    cantidad: 30,
                    precio: 15000,
                    area: "Recorridos",
                    zona: "Principal",
                    horario_apertura: "09:00 am",
                    horario_cierre: "05:00 pm",
                },
                {
                    producto: "Alimentación de animales",
                    descripcion:
                        "Experiencia de alimentar a los animales supervisados por cuidadores",
                    cantidad: 15,
                    precio: 5000,
                    area: "Interacción",
                    zona: "Animales exóticos",
                    horario_apertura: "10:00 am",
                    horario_cierre: "03:00 pm",
                },
                {
                    producto: "Espectáculo de delfines",
                    descripcion: "Show de delfines en el estadio acuático",
                    cantidad: 100,
                    precio: 10000,
                    area: "Shows",
                    zona: "Delfinario",
                    horario_apertura: "11:30 am",
                    horario_cierre: "01:00 pm",
                },
                {
                    producto: "Campamento nocturno",
                    descripcion:
                        "Pasadía nocturno con fogata, observación de estrellas y actividades educativas",
                    cantidad: 20,
                    precio: 25000,
                    area: "Eventos especiales",
                    zona: "Área de camping",
                    horario_apertura: "06:00 pm",
                    horario_cierre: "08:00 am",
                },
                {
                    producto: "Clase de fotografía de vida silvestre",
                    descripcion:
                        "Curso de fotografía con enfoque en capturar animales en su entorno natural",
                    cantidad: 10,
                    precio: 35000,
                    area: "Educación",
                    zona: "Bosque fotográfico",
                    horario_apertura: "02:00 pm",
                    horario_cierre: "06:00 pm",
                },
            ]);
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar la data de ${this.entity}`
            );
            throw error.message;
        }
    }
}
export default ServiciosSchema;
