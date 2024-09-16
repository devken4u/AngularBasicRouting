import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Account = {
  username: string;
  password: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  adminAccount: Account = {
    username: 'admin',
    password: 'admin',
  };

  username: string = '';
  password: string = '';

  wrongCredentialMessage: string = '';

  login() {
    if (
      this.username === this.adminAccount.username &&
      this.password === this.adminAccount.password
    ) {
      this.router.navigateByUrl('/landing');
    } else {
      this.wrongCredentialMessage = 'Wrong credentials.';
    }
  }
}
