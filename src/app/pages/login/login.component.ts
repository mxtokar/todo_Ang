import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {User} from '../../core/models/todo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;
  public login = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  clearError() {
    this.loginForm.setErrors(null);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: this.login,
      password: this.password,
    });
  }

  public onSubmit(): void {
    const {login, password} = this.loginForm.value;
    this.userService.getUsers(login, password).subscribe((users: User[]) => {
      if (users.length) {
        this.router.navigate(['/dashboard']);
      } else {
        this.loginForm.setErrors({invalidUser: true});
      }
    });
  }
}
