import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  getAll() {
    return this.contactService.getAll();
  }

  @Post()
  create(@Body() data: CreateContactDto) {
    return this.contactService.create(data);
  }
}
