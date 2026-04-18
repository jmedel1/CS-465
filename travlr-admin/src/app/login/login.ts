import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: Auth) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: (data) => {
        this.authService.saveToken(data.token);
        alert('Login successful');
        location.reload();
      },
      error: (err) => {
        console.error(err);
        alert('Login failed');
      }
    });
  }
}