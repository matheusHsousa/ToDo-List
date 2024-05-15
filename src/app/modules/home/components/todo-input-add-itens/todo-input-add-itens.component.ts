import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {


  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskLister: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  public submiteItemTaskList(){
    this.addItemTaskLister = this.addItemTaskLister.trim()
    if(this.addItemTaskLister !== '')
    this.emmitItemTaskList.emit(this.addItemTaskLister);
    this.addItemTaskLister = "";
  }
}
