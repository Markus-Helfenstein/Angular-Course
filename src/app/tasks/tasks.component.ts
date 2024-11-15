import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { ITask } from './task/task.model';
import { TaskFormComponent } from "./task-form/task-form.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isEditingTask = signal(false);

  constructor(private tasksService: TasksService) {}

  get tasksOfSelectedUser() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isEditingTask.set(true);
  }

  onCloseAddTask() {
    this.isEditingTask.set(false);
  }
}
