import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Todo} from '../../model/todo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'taskInput',
  templateUrl: './taskInput.component.html',
  styleUrls: ['taskInput.component.scss'],
})
export class TaskInputComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();

  public taskForm!: FormGroup;
  public taskObj = new Todo();

  constructor(private api: TaskService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addTask() {
    if (this.taskForm.invalid) {
      return;
    }
    this.taskObj.task = this.taskForm.value.task;
    this.api.addTask(this.taskObj).subscribe(() => {
      this.taskForm.reset();
      this.taskAdded.emit();
    });
  }
}
