import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:9999/api/user/register', user)
    
  }
}
// registerUser(user: UserRegisterDTO): Observable<UserDTO> {
//   return this.http.post<UserDTO>(`${API_URL}/users`, user)
//      .pipe(
//         tap(({ username, email }) => {
//            this.storageService.setItem('email', email);
//            this.storageService.setItem('username', username);
//         })
//      );
// }

