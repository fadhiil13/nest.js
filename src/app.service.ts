import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  // GET /todos
  findAll(): Todo[] {
    return this.todos;
  }

  // GET /todos/:id
  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
    return todo;
  }

  // POST /todos
  create(title: string, status: string = 'pending'): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title,
      status,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  // PUT /todos/:id
  update(id: number, title: string, status: string): Todo {
    const todo = this.findOne(id);
    todo.title = title ?? todo.title;
    todo.status = status ?? todo.status;
    return todo;
  }

  // DELETE /todos/:id
  remove(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
    this.todos.splice(index, 1);
  }
}