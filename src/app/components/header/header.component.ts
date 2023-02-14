import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public currentUser: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.currentUser = !!localStorage.getItem('currentUser');
    });
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = false;
    this.router.navigate(['/login']);
  }
}
