import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [],
  providers:[AuthGuard],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
})
export class CoreModule { }
