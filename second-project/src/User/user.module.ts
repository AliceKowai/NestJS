import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersService } from "./user.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
    imports:[PrismaModule],
    exports : [],
    controllers : [UserController],
    providers:[UsersService],    
})
export class UserModule{}
