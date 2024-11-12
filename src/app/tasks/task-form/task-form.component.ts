import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { ITask } from '../task/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Input({ required: true }) taskToEdit!: Signal<ITask | undefined>;
  @Output() save = new EventEmitter<Signal<ITask | undefined>>();
  @Output() cancel = new EventEmitter();

  onSave() {
    this.save.emit(this.taskToEdit);
  }

  onCancel() {
    this.cancel.emit();
  }
}
