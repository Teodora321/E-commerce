import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: { email: string, password: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) { 
    
  }
  
  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:9999/api/user/register', user)
  }
  loginUser(user: IUser) {
    return this.http.post<IUser>('http://localhost:9999/api/user/login', user)
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user')
  }
}




