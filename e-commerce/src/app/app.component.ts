import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  get isReady(): boolean{
    return this.userService.currentUser !== undefined;
    //we write this to check if the app is ready, if we have a logged user or not; 
  }

  constructor(private userService: UserService){}
  
}
