import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    @Get()
    async allUser(){
        return await this.userService.allUser()
    }

    @Post()
    async createUser(@Body() createUserDto : CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @Get(':id')
    async getUserById(@Param('id') id : string){
        return await this.userService.getUserById(id)
    }


}
