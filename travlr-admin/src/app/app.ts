import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { TripForm } from './trip-form/trip-form';
import { TripList } from './trip-list/trip-list';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Login, TripForm, TripList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public authService: Auth) {}

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}