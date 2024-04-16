import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  SignIn(credentials: any) {
    this.http.post(`${API_URL}/auth/login`, credentials);
  }
}
