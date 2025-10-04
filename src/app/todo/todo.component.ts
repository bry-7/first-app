import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../add-task/add-task';
import { TodoService } from './todo.service';
import { EditTask } from '../edit-task/edit-task';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, AddTask, EditTask],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.getTodos();
  }

  taskToEdit = {
    id: 0,
    task: '',
    state: '',
  };

  action = '';

  setAction(newAction: string) {
    this.action = newAction;
  }

  showEditForm(task: { id: number; task: string; state: string }) {
    this.taskToEdit = { ...task };
    this.setAction('edit');
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id);
  }
}
