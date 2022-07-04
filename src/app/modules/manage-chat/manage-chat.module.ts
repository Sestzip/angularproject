import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { CoreModule } from 'src/app/core/core.module';
import { ManageChatRoutingModule } from './manage-chat-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroupChatComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ManageChatRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManageChatModule { }
