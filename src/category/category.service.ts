import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import mongoose from 'mongoose';

@Injectable()
export class CategoryService {

  constructor (@InjectModel(Category.name)
private categoryModel: mongoose.Model<Category>

){}
 async create(category: Category):Promise<Category> {
  const res = await this.categoryModel.create(category);
  return res;
  }

  async findAll():Promise<Category[]> {
    const category = await this.categoryModel.find()
    return category
  }

 async findOne(uid: string) {
  const category = await this.categoryModel.findOne({ uid: uid }).exec(); 
  return category;
  }

  update(id: number, updateCategoryDto: string) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
