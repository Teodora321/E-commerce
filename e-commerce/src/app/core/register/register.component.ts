import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/password-match';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../error-styles.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private userService: UserService,
     private fb:FormBuilder) {
    this.registerForm = fb.group({
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required,Validators.minLength(6)]]
      }, {
        validators: [passwordMatch]
      })
    });
  }
  ngOnInit() {
  }
  registerUser() {
    this.userService.registerUser(this.registerForm.value).subscribe((user: IUser) => {
      console.log(user)
    })
  }

}

// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(
//     private readonly usersService: UsersService,
//     private readonly fb: FormBuilder,
//     private readonly router: Router,
//   ) {
//     this.buildForm();
//   }

//   register(): void {
//     this.usersService.registerUser(this.registerForm.value)
//       .subscribe((user: UserDTO) => {
//         this.router.navigate(['/login']);
//       });
//   }

//   private buildForm(): void {
//     this.registerForm = this.fb.group({
//       username: ['', Validators.compose([
//         Validators.required,
//         Validators.minLength(3),
//         Validators.maxLength(15),
//       ])],
//       email: ['', Validators.compose([
//         Validators.required,
//         Validators.email,
//         Validators.maxLength(30),
//       ])],
//       password: ['', Validators.compose([
//         Validators.required,
//         Validators.minLength(3),
//         Validators.maxLength(15),
//       ])],
//       repeatPassword: ['', Validators.compose([
//         Validators.required,
//         Validators.minLength(3),
//         Validators.maxLength(15),
//       ])],
//     },
//       { validator: this.checkPasswords }
//     );
//   }

//   checkPasswords(group: FormGroup) {
//     const password = group.get('password').value;
//     const repeatPassword = group.get('repeatPassword').value;

//     return password === repeatPassword ? null : { notSame: true };
//   }
// }
