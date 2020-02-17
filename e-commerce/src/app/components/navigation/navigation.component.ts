import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  get isLogged() {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService,
    private notificationService:NotificationService,
    private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.userService.logoutUser().subscribe(() => {
      this.router.navigate(['login']);
      this.notificationService.success('You have been successfully logged out!')

    });
  }



}
