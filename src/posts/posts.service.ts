import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServiceDatabase';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService){}

  async create(data: Post) {
    const posts = await this.prisma.post.create({
      data,
    });
    return posts
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async update(id: number, data: Post) {
    return await this.prisma.post.update({
      data,
      where: {
        id: Number(id)
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where: {
        id: Number(id)
      }
    });
  }
}
