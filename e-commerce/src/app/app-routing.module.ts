import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component:AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
    
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: "**",
    component: NotFoundComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
