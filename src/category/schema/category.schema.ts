import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SubCategory } from "src/sub-category/schema/subCategory.schema";
import { v4 as uuidv4 } from "uuid";

@Schema({
    timestamps: true,
    _id: true,
    versionKey: false
})
export class Category {

@Prop({ type: String, default: uuidv4 })
uid:string
@Prop()
name:string
@Prop()
description:string

@Prop({ type: [{ type: SubCategory }], default: [] }) 
subcategories: SubCategory[]; 
}

export const CategorySchema = SchemaFactory.createForClass(Category)