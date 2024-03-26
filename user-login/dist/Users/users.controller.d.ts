import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(data: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    read(): void;
    update(): void;
    updatePartial(): void;
    delete(): void;
}
