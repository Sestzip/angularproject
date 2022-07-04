import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupChatComponent } from "./group-chat/group-chat.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GroupChatComponent,
                data: { title: 'Group Chat' }
            }
        ]
    }
 ];


 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class   ManageChatRoutingModule { }
