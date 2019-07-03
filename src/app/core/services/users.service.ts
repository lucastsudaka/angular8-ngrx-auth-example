import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { User } from './../../shared/models/user.model';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient, private _globalService: GlobalService) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this._globalService.env.API_URL}/users`);
  }

  getUserById(payload: number): Observable<User> {
    return this._http.get<User>(`${this._globalService.env.API_URL}/users/${payload}`);
  }

  createUser(payload: User): Observable<User> {
    return this._http.post<User>(`${this._globalService.env.API_URL}/users` , payload);
  }

  updateUser(user: User): Observable<User> {
    return this._http.patch<User>(
      `${this._globalService.env.API_URL}/users/${user.id}`,
      user
    );
  }

  deleteUser(payload: number) {
    return this._http.delete(`${this._globalService.env.API_URL}/users/${payload}`);
  }
}
