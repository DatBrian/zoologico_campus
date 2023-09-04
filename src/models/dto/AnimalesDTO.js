import { check } from "express-validator";

export const AnimalesDTO= [

    check("name")
    .notEmpty().withMessage("El campo name es Obligatorio")
    .isString().withMessage("El campo name debe ser de tipo String"),

    check("species")
    .notEmpty().withMessage("El campo species es Obligatorio"),

    check("class")
    .notEmpty().withMessage("El campo class es Obligatorio")
    .isString().withMessage("El campo class debe ser de tipo String"),

    check("sub_class")
    .notEmpty().withMessage("El campo sub_class es Obligatorio")
    .isString().withMessage("El campo sub_class debe ser de tipo String"),

    check("origin")
    .notEmpty().withMessage("El campo origin es Obligatorio")
    .isString().withMessage("El campo origin debe ser de tipo String"),

    check("state")
    .notEmpty().withMessage("El campo state es Obligatorio")
    .isString().withMessage("El campo state debe ser de tipo String"),

    check("curiosity")
    .notEmpty().withMessage("El campo curiosity es Obligatorio"),

    check("zone")
    .notEmpty().withMessage("El campo zone es Obligatorio")
    .isString().withMessage("El campo zone debe ser de tipo String"),

    check("belonging_area")
    .notEmpty().withMessage("El campo belonging_area es Obligatorio")
    .isString().withMessage("El campo belonging_area debe ser de tipo String")
]


