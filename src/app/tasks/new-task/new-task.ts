import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})

export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() addTask = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary= '';
  enteredDueDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.addTask.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate});
  }
}
