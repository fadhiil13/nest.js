import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './app.service';

@Controller('todos')
export class TodosController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Post()
  create(@Body('title') title: string, @Body('status') status: string) {
    return this.todosService.create(title, status);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('status') status: string,
  ) {
    return this.todosService.update(+id, title, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}