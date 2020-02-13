import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  get isLogged() {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  

}
