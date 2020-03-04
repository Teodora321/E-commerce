import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',    
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',  '../../error-styles.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  loginUser({ email, password }: { email: string, password: string }) :void {
    this.userService.loginUser(email, password).subscribe(() => {
      this.router.navigate(['/']);
      this.notificationService.success('Welcome to Shopify')
    }, () => this.notificationService.error('Invalid credentials. Please, try again.'))
  }
}


