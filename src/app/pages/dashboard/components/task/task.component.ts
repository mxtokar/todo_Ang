import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../../../core/models/todo';
import {TaskService} from '../../../../core/services/task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['task.component.scss'],
})
export class TaskComponent {
  public isChecked = false;

  @Input() task!: Todo;
  @Output() taskDeleted = new EventEmitter();

  constructor(private api: TaskService) {}

  public deleteTask(todo: Todo): void {
    this.api.deleteTask(todo).subscribe();
    this.taskDeleted.emit();
  }
}
