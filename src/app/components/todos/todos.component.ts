import { Component } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Revise Java',
        desc: 'description'
      },
      {
        title: 'Make a site using wp',
        desc: 'description'
      },
    ];
  }

  delTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addingTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }

}
