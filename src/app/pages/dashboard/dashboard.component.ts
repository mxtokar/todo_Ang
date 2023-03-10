import {Component, OnInit} from '@angular/core';
import {Todo} from '../../core/models/todo';
import {TaskService} from '../../core/services/task.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public taskArr: Todo[] = [];

  constructor(private api: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.api.getTasks().subscribe((res) => {
      this.taskArr = res;
    });
  }

  onTaskAdded() {
    this.getTasks();
  }

  onTaskDeleted() {
    this.getTasks();
  }

  deleteAllTasks() {
    this.taskArr.map((task) => {
      this.api.deleteTask(task).subscribe();
      this.getTasks();
    });
  }
}
