import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User> & Document

@Schema({timestamps : true})
export class User{
    @Prop({
        type : String,
        unique : true,
        required : true
    })
    username : string

    @Prop({
        type : String,
        unique : true,
        required : true
    })
    email : string
}

export const UserSchema = SchemaFactory.createForClass(User)