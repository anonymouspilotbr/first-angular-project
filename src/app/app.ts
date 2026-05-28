import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserID = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserID)!;
  }

  onSelectUser(id: string){
    this.selectedUserID = id;
  }
}
