import ClientError from "../../utils/ClientError.js";

class AnimalesSchema {
    constructor(database) {
        this.database = database;
        this.entity = "animales";
        this.collection = this.database.collection(this.entity);
    }

    static properties() {
        return {
            _id: {
                bsonType: 'objectId',
            },
            nombre: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo name y este debe ser un string"
            },
            especie: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo species y este debe ser un string"
            },
            clase: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo class y este debe ser un string"
            },
            sub_clase: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo sub_class y este debe ser un string"
            },
            pais_origen: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo origin y este debe ser un string"
            },
            estado: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo state y este debe ser un string"
            },
            dato_curioso: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo curiosity y este debe ser un string"
            },
            zona: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo zone y este debe ser un string"
            },
            area: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo belonging_area y este debe ser un string"
            },
        }
    }

    async generateCollection() {
        try {
            await this.database.createCollection(this.entity, {
                capped: true,
    size: 14000,
    max: 10,
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["nombre", "especie", "clase", "sub_clase","pais_origen", "estado", "dato_curioso", "zona", "area"],
            properties: {
                _id: {
                    bsonType: 'objectId',
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo name y este debe ser un string"
                },
                especie: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo species y este debe ser un string"
                },
                clase: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo class y este debe ser un string"
                },
                sub_clase: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo sub_class y este debe ser un string"
                },
                pais_origen: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo origin y este debe ser un string"
                },
                estado: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo state y este debe ser un string"
                },
                dato_curioso: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo curiosity y este debe ser un string"
                },
                zona: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo zone y este debe ser un string"
                },
                area: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                    description: "Debe informar el campo belonging_area y este debe ser un string"
                },
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
                nombre: "León",
                especie: "Panthera leo",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "África",
                estado: "Vulnerable",
                dato_curioso: "Los leones viven en grupos llamados manadas.",
                zona: "Savana",
                area: "África"
            },
            {
                nombre: "Elefante",
                especie: "Loxodonta africana",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "África",
                estado: "En peligro",
                dato_curioso: "Los elefantes tienen una increíble memoria.",
                zona: "Selva",
                area: "África"
            },
            {
                nombre: "Pingüino Emperador",
                especie: "Aptenodytes forsteri",
                clase: "Aves",
                sub_clase: "Aves marinas",
                pais_origen: "Antártida",
                estado: "Casi amenazado",
                dato_curioso: "Los pingüinos emperador son famosos por su crianza en condiciones extremas.",
                zona: "Antártida",
                area: "Aviario Polar"
            },
            {
                nombre: "Tigre de Bengala",
                especie: "Panthera tigris tigris",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "Asia",
                estado: "En peligro de extinción",
                dato_curioso: "Los tigres son excelentes nadadores y disfrutan del agua.",
                zona: "Bosque tropical",
                area: "Asia"
            },
            {
                nombre: "Cebra",
                especie: "Equus zebra",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "África",
                estado: "Preocupación menor",
                dato_curioso: "Las cebras tienen patrones únicos de rayas que las identifican individualmente.",
                zona: "Savana",
                area: "África"
            },
            {
                nombre: "Delfín Nariz de Botella",
                especie: "Tursiops truncatus",
                clase: "Mamífero",
                sub_clase: "Acuático",
                pais_origen: "Océanos del mundo",
                estado: "Datos insuficientes",
                dato_curioso: "Los delfines usan ecolocalización para comunicarse y cazar.",
                zona: "Océano",
                area: "Mares y océanos"
            },
            {
                nombre: "Oso Polar",
                especie: "Ursus maritimus",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "Ártico",
                estado: "Vulnerable",
                dato_curioso: "Los osos polares son excelentes nadadores y cazadores marinos.",
                zona: "Hielo polar",
                area: "Ártico"
            },
            {
                nombre: "Hipopótamo",
                especie: "Hippopotamus amphibius",
                clase: "Mamífero",
                sub_clase: "Acuático",
                pais_origen: "África",
                estado: "Vulnerable",
                dato_curioso: "A pesar de su aspecto tranquilo, los hipopótamos son muy agresivos y peligrosos.",
                zona: "Río",
                area: "África"
            },
            {
                nombre: "Gorila",
                especie: "Gorilla gorilla",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "África",
                estado: "En peligro",
                dato_curioso: "Los gorilas viven en grupos liderados por un macho dominante llamado silverback.",
                zona: "Selva",
                area: "África"
            },
            {
                nombre: "Panda Gigante",
                especie: "Ailuropoda melanoleuca",
                clase: "Mamífero",
                sub_clase: "Terrestre",
                pais_origen: "China",
                estado: "Vulnerable",
                dato_curioso: "Los pandas gigantes se alimentan principalmente de bambú.",
                zona: "Bosque de bambú",
                area: "Asia"
            }
            ]);
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar los datos de ${this.entity}`
            );
            throw error.message;
        }
    }
}
export default AnimalesSchema;