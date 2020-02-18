import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';
import { NotificationService } from './services/notification.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  providers:[AuthGuard, NotificationService],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ]
  
})
export class CoreModule { }
