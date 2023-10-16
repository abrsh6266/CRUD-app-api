import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async userFindMany() {
    return this.prisma.user.findMany();
  }

  async userFindUnique(where: { id: number }) {
    return this.prisma.user.findUnique({ where });
  }

  async userCreate(data: { name: string; email: string; password: string; phone?: string }) {
    return this.prisma.user.create({ data });
  }

  async userUpdate(params: { where: { id: number }; data: { name?: string; email?: string; password?: string; phone?: string } }) {
    const { where, data } = params;
    return this.prisma.user.update({ where, data });
  }

  async userDelete(where: { id: number }) {
    return this.prisma.user.delete({ where });
  }

  async cleanup() {
    await this.prisma.$disconnect();
  }
}
