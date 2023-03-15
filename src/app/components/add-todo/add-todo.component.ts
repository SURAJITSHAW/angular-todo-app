import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title = "";
  desc = "";

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      title: this.title,
      desc: this.desc
    }

    this.addTodo.emit(todo);
  }
}
