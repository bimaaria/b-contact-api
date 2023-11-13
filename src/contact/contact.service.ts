import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetContactDto } from './dto/get-contact-dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<GetContactDto[] | []> {
    return this.prisma.contact.findMany();
  }

  async create(data: CreateContactDto) {
    return await this.prisma.contact.create({ data });
  }
}
