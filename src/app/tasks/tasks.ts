import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { newTaskData } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskListComponent {
  @Input({required: true}) userId !: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onClickAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: newTaskData){
    this.tasks.push({
      id: `t${this.tasks.length + 1}`,
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;
  }
}
