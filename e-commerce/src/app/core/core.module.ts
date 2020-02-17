import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';
import { NotificationService } from './services/notification.service';


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
