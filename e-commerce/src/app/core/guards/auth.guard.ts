import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(
        private userService: UserService,
        private router:Router
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
         return this.userService.isLogged === route.data.isLogged
        //this.router.navigate(['/user/profile']); 
    }
}