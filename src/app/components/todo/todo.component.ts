import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  @Input() todoType: string = "";
  cardTitle: string = "Card Title";
  cardBodyText: string = "Some quick example text to build on the card title";
  leftBtnText: string = "Mark as completed";
  rightBtnText: string = "Remove";

  constructor() { }

  ngOnInit(): void {
    if(this.todoType === "completed") {
      this.rightBtnText = "Permanently Remove";
      this.leftBtnText = "Set As Uncompleted"
    }
  }

}
