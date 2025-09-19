import {Component, input} from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})

export class Todo {
  todos = [
    {id: 1, task: "1st Task", state:"done"},
    {id: 2, task: "2nd Task", state:"pending"},
    {id: 3, task: "3rd Task", state:"pending"},
  ]

  myInputAdd = "";

  addTask = (newTask:string) => {
    let newId;

    newId = this.todos[this.todos.length - 1].id + 1;
    this.todos.push({id: newId, task: newTask, state:"pending"})

    this.myInputAdd = "";
  }

  removeTask = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  myEditTaskName = "";
  selectedTaskName = "";

  getTaskName = (task:string) => {
    this.myEditTaskName = task;
    this.selectedTaskName = task;
  }

  editTask = () => {
    this.todos[this.todos.findIndex(t =>
      t.task === this.selectedTaskName)].task = this.myEditTaskName;

    this.myEditTaskName = "";
    this.selectedTaskName = "";
  };
}
