import AnimalesSchema from "./AnimalesSchema.js";
import EmpleadosSchema from "./EmpleadosSchema.js";
import EventosSchema from "./EventosSchema.js";
import PasesSchema from "./PasesSchema.js";

import ServiciosSchema from "./ServiciosSchema.js";
import JornadasSchema from "./JornadasSchema.js";
import RestauranteCafeteriaSchema from "./RestauranteCafeteriasSchema.js";
import AutoIncrementSchema from "./AutoincrementSchema.js";
import RoleSchema from "./RoleSchema.js";
import UserSchema from "./UserSchema.js";

const schemas = [
    AutoIncrementSchema,
    RoleSchema,
    UserSchema,
    AnimalesSchema,
    EventosSchema,
    PasesSchema,
    ServiciosSchema,
    EmpleadosSchema,
    JornadasSchema,
    RestauranteCafeteriaSchema,
];

export { schemas };
