import { check } from "express-validator";

export const CheckPostAllEmployees= [

    check("complete_name")
    .notEmpty().withMessage("El campo complete_name es Obligatorio")
    .isString().withMessage("El campo complete_name debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("asignationTask")
    .notEmpty().withMessage("El campo asignationTask es Obligatorio")
    .isString().withMessage("El campo asignationTask debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("address")
    .notEmpty().withMessage("El campo address es Obligatorio")
    .isString().withMessage("El campo address debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("Email")
    .notEmpty().withMessage("El campo Email es Obligatorio")
    .isString().withMessage("El campo Email debe ser de tipo String")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/).withMessage("Solo admite letras"),

    check("phone_number")
    .notEmpty().withMessage("El campo phone_number es Obligatorio")
    .isString().withMessage("El campo phone_number debe ser de tipo String")
    .matches(/^[0-9-]*$/).withMessage("Solo admite letras"),

    check("belonging_area")
    .notEmpty().withMessage("El campo belonging_area es Obligatorio")
    .isString().withMessage("El campo belonging_area debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("zone")
    .notEmpty().withMessage("El campo zone es Obligatorio")
    .isString().withMessage("El campo zone debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("schedule")
    .notEmpty().withMessage("El campo schedule es Obligatorio")
    .isString().withMessage("El campo schedule debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),
]


