import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    ConfirmationPopupComponent,
    EditComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    FormsModule 
  ],
  exports:[
    MenuComponent,
    ConfirmationPopupComponent
  ]
})
export class CoreModule { }
