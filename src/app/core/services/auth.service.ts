import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isUserAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
}
