import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  
  get currentUser(){
      return this.userService.currentUser
  }
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],});
  }
  ngOnInit() { 
    console.log(this.currentUser)
  }
   
  editUser({ email, firstName, lastName}: { email: string, firstName:string, lastName:string }) {
    this.userService.editUser(email, firstName, lastName).subscribe(() => {
      //this.router.navigate(['login']);
    }, console.error);

  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.router.navigate(['/'])
    })
    
  }
}
