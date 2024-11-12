import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { v4 as uuidv4 } from 'uuid';
import { ITask } from './task/task.model';
import { TaskFormComponent } from "./task-form/task-form.component";

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

  taskInEditMode = signal<ITask | undefined>(undefined);
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get tasksOfSelectedUser() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  onAddTask() {
    // TODO: confirm canceling current changes
    this.taskInEditMode.set({
      id: '',
      userId: this.userId,
      title: '',
      summary: '',
      dueDate: '',
    });
  }

  onAddSave($event: Signal<ITask | undefined>) {
    const task = $event();
    if (!task) throw new Error('Task event argument must not be undefined!');
    if (task.id) {
      // TODO: replace in list
    } else {
      task.id = 't' + uuidv4();
      this.tasks.unshift(task);
    }
    this.taskInEditMode.set(undefined);
  }

  onAddCancel() {
    this.taskInEditMode.set(undefined);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }
}
