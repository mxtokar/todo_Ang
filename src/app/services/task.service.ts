import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl!: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/task';
  }

  addTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  deleteTask(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseUrl}/${todo.id}`);
  }
}
