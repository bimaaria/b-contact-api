import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async getAll() {
    return await this.contactService.getAll();
  }
}
