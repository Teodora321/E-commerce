import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router:Router
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  ngOnInit() {
  }
  loginUser() {
    
  }

}
