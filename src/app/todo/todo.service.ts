import { Injectable } from '@angular/core';
import { type Task } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos = [
    { id: 1, task: 'Présenter les composants Angular', state: 'done' },
    { id: 2, task: 'Présenter les mécanisme de binding', state: 'pending' },
    { id: 3, task: 'Introduction aux directives', state: 'pending' },
  ];

  getTodos(): Task[] {
    return this.todos;
  }

  addTask(newTask: string) {
    const task = {
      id: this.todos[this.todos.length - 1].id + 1,
      task: newTask,
      state: 'pending',
    };
    this.todos = [...this.todos, task];
  }

  editTask(taskToEdit: Task) {
    this.todos = this.todos.map((todo) => (todo.id == taskToEdit.id ? taskToEdit : todo));
  }

  deleteTask(id: number) {
    if (confirm('Êtes-vous sûre de vouloir supprimer la tâche?'))
      this.todos = this.todos.filter((todo) => todo.id != id);
  }
}
