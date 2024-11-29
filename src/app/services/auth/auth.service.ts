import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../models/register.model';
import { Login } from '../../models/login.model';
import { AuthenticatedUser } from '../../models/authenticatedUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://appointments-api-ur36.onrender.com/auth';
  constructor(private http: HttpClient) {}
  register(payload: Register): Observable<void> {
    return this.http.post<void>(`${this.url}/register`, payload);
  }

  login(payload: Login): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(`${this.url}/login`, payload);
  }
}
