import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItensTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deletAllTaskList() {
    const confirm = window.confirm('realmente deseja exclucir tudo?');
    if (confirm == true) {
      this.taskList = [];
    }
  }

  public validatorImput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task esta vazia, deseja deletar?');

      if (confirm) {
        this.deleteItensTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
