import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
import { IUser } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<IUser | undefined>(undefined);

  onSelectUser(selectedUserId: string) {
    console.log(`Selected user with id ${selectedUserId}`);
    this.selectedUser.set(DUMMY_USERS.find(u => u.id === selectedUserId));
  }
}
