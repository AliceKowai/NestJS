import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import UsuarioRepository from "../usuario.repository";

export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private usuarioRepository: UsuarioRepository){}
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}