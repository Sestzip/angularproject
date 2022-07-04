import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    UserListComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    CoreModule,    
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class ManageUserModule { }
