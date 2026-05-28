import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskComponent {
  @Input() name?: string;
}
