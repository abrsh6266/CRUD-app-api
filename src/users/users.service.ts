import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '.prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.userFindMany();
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.userFindUnique({ id });
  }

  async create(data: User): Promise<User> {
    return this.prisma.userCreate(data);
  }

  async update(id: number, data: User): Promise<User> {
    return this.prisma.userUpdate({ where: { id }, data });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.userDelete({ id });
  }
}