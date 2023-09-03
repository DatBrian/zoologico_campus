import { check } from "express-validator";

export const JornadasDTO= [

    check("schedule")
    .notEmpty().withMessage("El campo schedule es Obligatorio")
    .isString().withMessage("El campo schedule debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("entry_time")
    .notEmpty().withMessage("El campo entry_time es Obligatorio")
    .isString().withMessage("El campo entry_time debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),

    check("departure_time")
    .notEmpty().withMessage("El campo departure_time es Obligatorio")
    .isString().withMessage("El campo departure_time debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),
]

