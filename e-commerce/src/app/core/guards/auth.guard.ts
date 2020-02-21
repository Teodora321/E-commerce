import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(
        private readonly userService: UserService,
        private readonly router:Router
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        const auth = this.userService.isLogged === route.data.isLogged;
        if (auth) { return true };
        this.router.navigate(['/login'])
        return false;
    
    }
}