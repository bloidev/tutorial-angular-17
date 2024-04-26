import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUserCredentials, IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  SignIn(credentials: Pick<IUser, "email" | "pass">) : Observable<IUserCredentials> {
    return this.http.post<IUserCredentials>(`${API_URL}/auth/login`, credentials);
  }

  SignUp(credentials: Omit<IUser, "id">) : Observable<IUser> {
    return this.http.post<IUser>(`${API_URL}/auth/register`, credentials);
  }
}
