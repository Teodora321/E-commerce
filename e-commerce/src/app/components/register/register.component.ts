import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/password-match';
import { IUser } from '../../shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../error-styles.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router: Router
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
  ngOnInit() {
  }
  registerUser({ email, firstName, lastName, passwords: { password } }: { email: string, firstName, lastName, passwords: { password: string } }) {
    this.userService.registerUser(email, firstName, lastName, password).subscribe(() => {
      this.router.navigate(['login']);
    }, console.error);
  }
}
