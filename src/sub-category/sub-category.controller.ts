import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';

@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  create(@Body() createSubCategoryDto: string) {
    return this.subCategoryService.create(createSubCategoryDto);
  }

  @Get()
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCategoryDto: string) {
    return this.subCategoryService.update(+id, updateSubCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoryService.remove(+id);
  }
}
