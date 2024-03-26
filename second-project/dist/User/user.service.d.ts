import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatPatcheUserDTO } from "./dto/update-patch-user.dto";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ name, email, cpf, password }: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    list(): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }[]>;
    show(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    update(id: number, data: UpdateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        cpf: string;
        password: string;
    }>;
    updatePartial(id: number, data: UpdatPatcheUserDTO): Promise<{
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
