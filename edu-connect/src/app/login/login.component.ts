import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/courses']);
      },
      error: () => {
        this.errorMessage = 'Invalid login or password';
      }
    });
  }
}
