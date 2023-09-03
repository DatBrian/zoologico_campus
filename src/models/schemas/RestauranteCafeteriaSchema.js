import ClientError from "../../utils/ClientError.js";

class RestauranteCafeteriaSchema {
    constructor(database) {
        this.database = database;
        this.entity = "restauranteCafeteria";
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
                        required: ["producto", "descripcion", "cantidad", "precio", "lugar",
                            "jornada"
                        ],
                        properties: {
                            _id: {
                                bsonType: 'objectId',
                            },
                            producto: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description: "Debe informar el campo product y este debe ser un string"
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description: "Debe informar el campo description y este debe ser un string"
                            },
                            cantidad: {
                                bsonType: "int",
                                minimum: 0,
                                maximum: 9999999,
                                pattern: "^[0-9,.#@\\s-]+$",
                                description: "El campo amount debe ser un número y estar comprendido entre 0 y 9999999"
                            },
                            precio: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description: "Debe informar el campo price y este debe ser un string"
                            },
                            lugar: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo place y este debe ser un string"
                            },
                            jornada: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo schedule y este debe ser un string"
                            }
                        }
                    }
                }
            });
        } catch (error) {
            new ClientError(`Error al generar la colección de ${this.entity}`);
            throw error.message;
        }
    }

    async createData() {
        try {
            await this.collection.insertMany([{
                    producto: "Combo Leon",
                    descripcion: "Empanada de Carner de avestruz con Limonada del África, Cafeteria",
                    cantidad: 20,
                    precio: 23000,
                    lugar:"Cafeteria",
                    jornada: "Cafeteria"
                },
                {
                    producto: "Combo Aguila",
                    descripcion: "Aguila apanada con arepa de pelao mas gasimba",
                    cantidad: 30,
                    precio: 35000,
                    lugar:"Restaurante",
                    jornada: "Restaurante"
                },
                {
                    producto: "Combo Tigre",
                    descripcion: "Pastas con carne de cocodrilo, pan y te de hiervas misteriosas",
                    cantidad: 40,
                    precio: 34000,
                    lugar:"Restaurante",
                    jornada: "Restaurante"
                },
                {
                    producto: "Combo Jirafa",
                    descripcion: "Hamburguesa de hipopotamo, mas tostones de guanbana, con gasiosita",
                    cantidad: 63,
                    precio: 63000,
                    lugar:"Restaurante",
                    jornada: "Restaurante"
                },
                {
                    producto: "Combo Caballo",
                    descripcion: "Empanada de paja acompañado de agua",
                    cantidad: 50,
                    precio: 13000,
                    lugar:"Cafeteria",
                    jornada: "Cafeteria"
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
export default RestauranteCafeteriaSchema;