import { Component, signal } from '@angular/core';
import {Home} from './home/home';
import {Todo} from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [Home, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ahmed');
}
