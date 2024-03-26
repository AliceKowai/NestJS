import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatPatcheUserDTO } from "./dto/update-patch-user.dto";
import { UsersService } from "./user.service";

@Controller('users')
export class UserController{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() data:CreateUserDTO){
        return this.usersService.create(data)
    }
    @Get()
    async read(){
        return this.usersService.list()
    }
    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id:number){
        return this.usersService.show(id)
    }
    
    @Put(':id')
    async update(@Body() data:UpdateUserDTO, @Param('id', ParseIntPipe) id:number){
        return this.usersService.update(id,data)
    }
    @Patch(':id')
    async updatePatial(@Body() data:UpdatPatcheUserDTO, @Param('id', ParseIntPipe) id:number){
        return this.usersService.updatePartial(id, data)
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number){
        return this.usersService.delete(id)
    }
}