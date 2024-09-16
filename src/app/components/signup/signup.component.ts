import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  typedUsername: string = '';
  typedPassword: string = '';

  signup() {
    this.typedUsername = this.username;
    this.typedPassword = this.password;
    this.username = '';
    this.password = '';
  }

  clearFields() {
    this.typedUsername = '';
    this.typedPassword = '';
  }
}
