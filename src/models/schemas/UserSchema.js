import bcrypt from "bcryptjs";

class UserSchema {
    constructor(database) {
        this.database = database;
        this.entity = "user";
        this.Collection = database.collection(this.entity);
    }

    async generateCollection() {
        try {
            await this.database.createCollection(this.entity, {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        additionalProperties: false,
                        required: ["user", "contraseña", "rol"],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            user: {
                                bsonType: "string",
                                description: "username is required",
                            },
                            contraseña: {
                                bsonType: "string",
                                description: "Password is required",
                            },
                            rol: {
                                bsonType: "array",
                                description: "role",
                                items: {
                                    bsonType: "int",
                                },
                            },
                            permisos: {
                                bsonType: "object",
                                description: "Ingrese los permisos",
                                properties: {
                                    "/user": {
                                        bsonType: "array",
                                        items: {
                                            bsonType: "string",
                                            description:
                                                "Ingrese la version autorizada",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
        } catch (error) {
            throw error;
        }
    }

    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    static async matchPassword(password, userPassword) {
        return await bcrypt.compare(password, userPassword);
    }

    //! Es tamal
    async createData() {
        try {
            await this.Collection.insertMany([
                {
                    user: "Marcos",
                    contraseña: "contra1",
                    rol: [1],
                    permisos: {
                        "/user": ["1.0.0", "3.5.0"],
                    },
                },
                {
                    user: "Jhon",
                    contraseña: "contra2",
                    rol: [2],
                    permisos: {
                        "/api/v1/animales": ["1.0.0"],
                    },
                },
            ]);
        } catch (error) {
            throw error;
        }
    }
}
export default UserSchema;
