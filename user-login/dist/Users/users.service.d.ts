import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-users.dto";
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
}
