import ClientError from "../../utils/ClientError.js";

class PaseSchema {
    constructor(database) {
        this.database = database;
        this.entity = "pases";
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
                            "nombre",
                            "tipo",
                            "descripcion",
                            "zonas",
                            "precios",
                            "horario",
                            "dias",
                        ],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            nombre: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo name y este debe ser un string"
                            },
                            tipo: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo type y este debe ser un string"
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo description y este debe ser un string"
                            },
                            zonas: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo zone y este debe ser un string"
                            },
                            precios: {
                                bsonType: "number",
                                minimum: 0,
                                maximum: 9999999,
                                pattern: "^[0-9,.#@\\s-]+$",
                                description: "El campo prices debe ser un número y estar comprendido entre 0 y 9999999"
                            },
                            horario: {
                                bsonType: "string",
                                pattern: "^.*$",
                                description: "Debe informar el campo schedule y este debe ser un string"
                            },
                            dias: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo days_opening y este debe ser un string"
                            }
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
                    nombre: "Zona de Aves",
                    tipo: "Atracción",
                    descripcion: "Observa una variedad de aves exóticas",
                    zonas: "Zona Central",
                    precios: 15000,
                    horario: "10:00 am - 5:00 pm",
                    dias: "Todos los días",
                },
                {
                    nombre: "Acuario Submarino",
                    tipo: "Atracción",
                    descripcion:
                        "Explora el mundo marino a través de cristales acrílicos",
                    zonas: "Zona Oeste",
                    precios: 20000,
                    horario: "9:00 am - 6:00 pm",
                    dias: "Lunes a Viernes",
                },
                {
                    nombre: "Jardín de Mariposas",
                    tipo: "Atracción",
                    descripcion: "Sumérgete en un mundo de coloridas mariposas",
                    zonas: "Zona Este",
                    precios: 12000,
                    horario: "11:00 am - 4:00 pm",
                    dias: "Sábados y Domingos",
                },
                {
                    nombre: "Safari Africano",
                    tipo: "Atracción",
                    descripcion: "Vive la experiencia de un safari africano",
                    zonas: "Zona Norte",
                    precios: 25000,
                    horario: "8:00 am - 7:00 pm",
                    dias: "Todos los días excepto Martes",
                },
                {
                    nombre: "Zona de Reptiles",
                    tipo: "Atracción",
                    descripcion:
                        "Observa de cerca a los reptiles más fascinantes",
                    zonas: "Zona Sur",
                    precios: 18000,
                    horario: "12:00 pm - 6:00 pm",
                    dias: "Miércoles a Domingo",
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
export default PaseSchema;
