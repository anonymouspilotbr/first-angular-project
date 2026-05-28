import { Component, Input } from '@angular/core';

type Task = {
  id: string,
  userId: string,
  title: string,
  dueDate: string,
  summary: string,
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
