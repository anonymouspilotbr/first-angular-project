import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
 
  onSelectUser() {

  }

}
