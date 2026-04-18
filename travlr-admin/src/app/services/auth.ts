import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}