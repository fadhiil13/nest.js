import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './app.controller';
import { TodosService } from './app.service';

describe('AppController', () => {
  let appController: TodosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    appController = app.get<TodosController>(TodosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
