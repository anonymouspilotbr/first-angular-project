import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskListComponent {
  @Input({required: true}) userId !: string;
  @Input({required: true}) name!: string;
  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
