import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { get } from "http";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private readonly userService: UsersService){}

    //cria o CRUD
    @Post()
    create(@Body() data: CreateUserDTO){
        return this.userService.create(data)
    }
    @Get()
    read(){}
    @Put()
    update(){}
    @Patch()
    updatePartial(){}
    @Delete()
    delete(){}
}