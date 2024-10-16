import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from "uuid";

@Schema({
    timestamps: true,
    _id: false,
})
export class SubCategory {
@Prop({ type: String, default: uuidv4 })
id:string
@Prop()
name:string


}

export const CategorySchema = SchemaFactory.createForClass(SubCategory)