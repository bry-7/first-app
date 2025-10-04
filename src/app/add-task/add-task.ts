import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({ required: true }) action!: string;
  @Output() taskAdded = new EventEmitter<void>();
  @Output() cancelAdd = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  addTask(task: string) {
    this.todoService.addTask(task);
    this.taskAdded.emit();
  }

  cancel() {
    this.cancelAdd.emit();
  }
}
