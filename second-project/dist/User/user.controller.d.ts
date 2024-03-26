import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatPatcheUserDTO } from "./dto/update-patch-user.dto";
import { UsersService } from "./user.service";
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    read(): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }[]>;
    readOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    update(data: UpdateUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    updatePatial(data: UpdatPatcheUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
}
