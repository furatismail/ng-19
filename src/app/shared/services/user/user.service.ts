import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);

  constructor() { }

  get() : Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/api/user');
  }

  getUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/api/users');
  }

  save(user: User) : Observable<{status: boolean, message: string}> {
    return this.httpClient.post<{status: boolean, message: string}>('http://localhost:3000/api/users', user);
  }
}
