import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from "../../shared/card/card";

type Task = {
  id: string,
  userId: string,
  title: string,
  dueDate: string,
  summary: string,
}

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
