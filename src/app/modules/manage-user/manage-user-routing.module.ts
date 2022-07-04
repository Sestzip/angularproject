import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UserListComponent,
                data: { title: 'Manage User' }
            },
            {
                path: 'edit',
                children: [{
                    path: ':id',
                    pathMatch: 'full',
                    component: EditUserComponent
                }
                ]

            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageUserRoutingModule { }
