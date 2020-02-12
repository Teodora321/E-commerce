import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchDirective } from './directives/passwords-match.directive';



@NgModule({
  declarations: [PasswordMatchDirective],
  imports: [
    CommonModule
  ],
  exports:[PasswordMatchDirective]
})
export class SharedModule { }
