import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  addTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('/api/task', todo);
  }

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/task');
  }

  deleteTask(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`/api/task/${todo.id}`);
  }
}
