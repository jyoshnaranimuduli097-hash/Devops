import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { User, UserDocument } from './schema/User.schema.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel : Model<User>
    ){}
   async allUser(){
        return await this.userModel.find()
    }

    async createUser( data : CreateUserDto){
        const user =  new this.userModel({
            username : data.username,
            email : data.email
        })
        await user.save()
        return {
            message : `user created successfully !`,
            data
        }
    }

    async getUserById(id : string){
        const user = await this.userModel.findById(id)
        return user
    }
}
