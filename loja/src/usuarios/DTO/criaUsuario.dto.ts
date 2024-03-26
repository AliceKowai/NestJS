import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({message:"Não não pode ficar vazio."})
    nome: string;
    @IsEmail(undefined, {message:"O email deve ser valido"})
    email: string;
    @MinLength(6,{message: "A senha deve ter pelo menos 6 caracteres."})
    senha: string;

}