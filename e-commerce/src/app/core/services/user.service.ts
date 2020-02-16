import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  get isLogged() { return !!this.currentUser; }

  authCompleted$ = this.http.get('api/auth').pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.authCompleted$.subscribe((user: any) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });
  }

  loginUser(email: string, password: string) {
    return this.http.post('user/login', { email, password }).pipe(tap((user: any) => {
      this.currentUser = user;
      console.log(user)
    }));
  }

  registerUser(email: string, password: string) {
    return this.http.post('user/register', { email, password });
  }

  logoutUser() {
    return this.http.post('user/logout', {}).pipe(tap(() => {
      this.currentUser = null;
    }));
  }
  editUser(email: string, firstName: string, lastName: string) {
    return this.http.put('user/id', { email, firstName, lastName })

  };
  deleteUser(id: number) {
    
    return this.http.delete(`user/${id}`).pipe(tap(() => {
      console.log(id)
    }))

  }

}