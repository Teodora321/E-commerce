import { Component } from '@angular/core';
import { UserService } from '../../../app/core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/password-match';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../error-styles.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private userService: UserService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private  readonly notificationService:NotificationService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {
        validators: [passwordMatch]
      })
    });
  }
 

  registerUser({ email, firstName, lastName, passwords: { password } }: { email: string, firstName, lastName, passwords: { password: string } }) :void{
    this.userService.registerUser(email, firstName, lastName, password).subscribe(() => {
      this.router.navigate(['login']);
      this.notificationService.success('Account successfully created!')
    }, () => {
        this.notificationService.error('Something went wrong, please try again!')
    });
  }
}
