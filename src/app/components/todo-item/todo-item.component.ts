import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
    console.log("Delete function trigerred.");
  }
}
