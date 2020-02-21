import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css', '../../error-styles.css']
})
export class UserProfileComponent {
  profileForm: FormGroup;
  // currentUser: IUser;

   get currentUser(){
      return this.userService.currentUser
  }


  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.profileForm = this.fb.group({
      email: [this.currentUser.email, [Validators.required]],
      firstName: [this.currentUser.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.currentUser.lastName, [Validators.required, Validators.minLength(3)]],
    });

  }
 
  editUser(id) {
    let userValue = this.profileForm.value;
    this.userService.editUser(id, userValue).subscribe(() => {
      //this.profileForm.setValue(userValue);
      this.router.navigate(['/']);
      this.notificationService.success('Account successfully updated!')
    }, () => {
      this.notificationService.error('Something went wrong, please try again!')
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.currentUser = null
      this.router.navigate(['/'])
      this.notificationService.success('Account deleted!')
    }, () => {
      this.notificationService.error('Something went wrong, please try again!')
    })

  }
}
