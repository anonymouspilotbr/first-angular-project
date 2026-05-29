import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
    id: string; 
    avatar: string; 
    name: string;
  }

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
 
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
