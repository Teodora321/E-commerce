import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationComponent, FooterComponent, LoginComponent, RegisterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent,FooterComponent, LoginComponent, RegisterComponent,NotFoundComponent]
})
export class CoreModule { }
