import { Component, EventEmitter, Input, Output, output } from '@angular/core';

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
