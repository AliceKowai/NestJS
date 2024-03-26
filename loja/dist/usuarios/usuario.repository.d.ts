export default class UsuarioRepository {
    private usuarios;
    salvar(usuario: any): Promise<void>;
    listar(): Promise<any[]>;
}
