import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schema/category.schema';


@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() category: Category ) {
    return this.categoryService.create(category);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.categoryService.findOne(uid);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: string) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
