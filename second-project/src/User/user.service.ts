import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatPatcheUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, email, cpf, password}: CreateUserDTO) {
        return this.prisma.user_login.create({
            data: {
                name,
                email,
                cpf,
                password,
            }
        })
    }

    async list(){
        return this.prisma.user_login.findMany()
    }
    async show(id:number){
        return this.prisma.user_login.findUnique({
            where:{
                id,
            }
        })
    }
    async update(id:number, data:UpdateUserDTO){
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }

    async updatePartial(id:number, data:UpdatPatcheUserDTO){
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }
    async delete(id:number){
        return this.prisma.user_login.delete({
            where:{
                id
            }
        })
    }

}