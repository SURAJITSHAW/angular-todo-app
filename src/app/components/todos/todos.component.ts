import { Component } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Revise Java',
        desc: 'description',
        active: true,
      },
      {
        sno: 2,
        title: 'Make a site using wp',
        desc: 'description',
        active: true,
      },
    ];
  }

  delTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
