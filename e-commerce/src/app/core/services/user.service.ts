import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces/user';
import { IProduct } from 'src/app/shared/interfaces/product';

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

  registerUser(email: string,firstName:string,lastName:string, password: string) {
    return this.http.post('user/register', { email, password,firstName,lastName });
  }

  logoutUser() {
    return this.http.post('user/logout', {}).pipe(tap(() => {
      this.currentUser = null;
    }));
  }

  editUser(id:number, updatedUser) {
    return this.http.patch(`user/${this.currentUser._id}`, updatedUser).pipe(tap((updatedUser:any) => {
      this.currentUser=updatedUser
    }))

  };
  deleteUser(id: number) {
    return this.http.delete(`user/${id}`).pipe(tap(() => {
      this.currentUser = null;
    }))
  };

  addToCart(product: IProduct) {
    return this.http.put(`user/add/${this.currentUser._id}`, product)
  }
  
  getCartItems() {
    return this.http.get(`user/get/${this.currentUser._id}`)
  }
  deleteCartItems(product:IProduct) {
    return this.http.put(`user/deleteCart/${this.currentUser._id}`,product)
  }
  

}