import { Module } from "@nestjs/common";
import UsuarioController from "./usuarios.controller";
import UsuarioRepository from "./usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
  })

export class UsuarioModule{}