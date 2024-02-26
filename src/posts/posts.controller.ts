import { Controller, Get, Post, Body,  Param, Delete, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as Posts } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() data: Posts) {
    return await this.postsService.create(data);
  }

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postsService.findOne(+id);
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Posts) {
    return this.postsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
