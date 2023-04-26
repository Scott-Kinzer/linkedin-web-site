import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload, SignUpPayload } from '../models/inputTypes';
import { Token, Tokens } from 'src/app/models/token.interface';

const AUTH_API = 'https://test-api-prod-linkedin.onrender.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ email, password }: LoginPayload): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  refreshToken(tokens: Tokens): Observable<Tokens> {
    return this.http.post<Tokens>(
      AUTH_API + 'refreshToken',
      { ...tokens },
      httpOptions
    );
  }

  register({
    firstName,
    lastName,
    email,
    password,
  }: SignUpPayload): Observable<Tokens> {
    return this.http.post<Tokens>(
      AUTH_API + 'register',
      {
        firstName,
        lastName,
        email,
        password,
      },
      httpOptions
    );
  }
}
