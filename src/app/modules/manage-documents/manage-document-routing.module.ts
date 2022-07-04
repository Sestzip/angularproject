import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocumentUploadListComponent } from "./document/document-upload-list/document-upload-list.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DocumentUploadListComponent,
                data: { title: 'Manage Document' }
            }
        ]
    }
 ];


 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class    ManageDocumentsRoutingModule { }
