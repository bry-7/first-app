import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo/todo.service';
import { Task } from '../todo/todo.model';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask {
  @Input({ required: true }) action!: string;
  @Input({ required: true }) taskToEdit!: Task;
  @Output() editingTask = new EventEmitter<void>();
  @Output() taskEdited = new EventEmitter<void>();
  @Output() cancelAdd = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  editTask() {
    this.todoService.editTask(this.taskToEdit);
    this.taskEdited.emit();
  }

  changeState() {
    this.taskToEdit.state = this.taskToEdit.state == 'done' ? 'pending' : 'done';
  }

  cancel() {
    this.cancelAdd.emit();
  }
}
