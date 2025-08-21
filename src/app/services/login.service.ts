import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponseType} from '../types/login-response.type';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(name: string, password: string) {
    return this.httpClient.post<LoginResponseType>("/login", { name, password }).pipe(
      tap((value) => {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("username", value.name)
    }));
  }
}
