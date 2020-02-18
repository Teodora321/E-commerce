import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fader]
})
export class AppComponent {
  title = 'e-commerce';

  get isReady(): boolean{
    return this.userService.currentUser !== undefined;
    //we write this to check if the app is ready, if we have a logged user or not; 
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(private userService: UserService){}
  
}
