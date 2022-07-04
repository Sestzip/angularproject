import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { DocumentUploadListComponent } from './document/document-upload-list/document-upload-list.component';
import { SharedUploadListComponent } from './document/shared-upload-list/shared-upload-list.component';
import { UploadDocumentComponent } from './document/upload-document/upload-document.component';
import { SharedDocumentComponent } from './shared-document/shared-document.component';
import { UploadSharedListComponent } from './shared-document/upload-shared-list/upload-shared-list.component';
import { AddSharedDocumentComponent } from './shared-document/add-shared-document/add-shared-document.component';
import { ManageDocumentsRoutingModule } from './manage-document-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { PreviewComponent } from './document/document-upload-list/preview/preview.component';



@NgModule({
  declarations: [
    DocumentComponent,
    DocumentUploadListComponent,
    SharedUploadListComponent,
    UploadDocumentComponent,
    SharedDocumentComponent,
    UploadSharedListComponent,
    AddSharedDocumentComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    ManageDocumentsRoutingModule,
    CoreModule
  ]
})
export class ManageDocumentsModule { }
