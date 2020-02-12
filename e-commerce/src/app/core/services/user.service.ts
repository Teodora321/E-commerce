import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:9999/api/user/register', user)
  }
  loginUser(user: IUser) {
    
  }
}


// login(): void {
//   const userCredentials: UserLoginDTO = { password: this.loginForm.controls.password.value };
//   userCredentials[this.isEmail(this.loginForm.controls.email.value) ? 'email' : 'username'] = this.loginForm.controls.email.value;

//   this.authService.login(userCredentials)
//     .subscribe(
//       (data) => {
//         this.router.navigate(['/home-world']);
//         this.notificationService.success('Welcome :)');
//       },
//       () => this.notificationService.error('You have entered an invalid username or password'),
//     );
// }



