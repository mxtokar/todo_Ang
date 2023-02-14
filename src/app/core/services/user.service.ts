import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/todo';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(login: string, password: string): Observable<User[]> {
    const params = {login, password};
    return this.http.get<User[]>('/api/users', {params}).pipe(
      tap((users) => {
        const user = users.find((user) => user.login === login && user.password === password);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }
}
