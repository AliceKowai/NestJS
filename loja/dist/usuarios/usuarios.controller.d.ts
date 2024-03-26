import UsuarioRepository from './usuario.repository';
export default class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: any): Promise<any>;
    listUsuarios(): Promise<any[]>;
}
