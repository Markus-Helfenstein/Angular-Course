import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  
  get imagePath() { 
    return 'assets/users/' + this.selectedUser().avatar; 
  }

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[randomIndex()]);
    console.log(this.selectedUser.name);
  }
}
