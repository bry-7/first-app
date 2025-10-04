import { Component, signal } from '@angular/core';
//import { Home } from "./home/home";
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  //template : '<h1>App Commponent</h1>', //inline template
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular');
}
