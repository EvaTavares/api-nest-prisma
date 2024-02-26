import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaServiceDatabase';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  async create(data: User) {
    const users = await this.prisma.user.create({
      data,
    });
    return users;    
  }

  async findAll() {
    const allUsers = await this.prisma.user.findMany()
    return allUsers
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
