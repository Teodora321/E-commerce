import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: IUser;

  get isLogged() { return !!this.currentUser;}

  constructor(private http: HttpClient) { 
    this.http.get('api/auth').subscribe((user: any )=> {
      this.currentUser = user;
    }, () => {
        this.currentUser = null; //in case that we don't have a user
    })
    
  }
  
  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('user/register',user, {withCredentials:true})
  }
  loginUser(user: IUser) {
    return this.http.post<IUser>('user/login', user, {withCredentials:true})
  }
  logout() {
    return this.http.post<IUser>('user/logout', {}, {withCredentials:true})
  }
}




