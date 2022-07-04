import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject, Subscription } from 'rxjs';
import { ConfirmationPopupComponent } from 'src/app/core/confirmation-popup/confirmation-popup.component';
import { EditComponentComponent } from 'src/app/core/edit-component/edit-component.component';
import { DocumentModal } from '../../modals/document-modal';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-document-upload-list',
  templateUrl: './document-upload-list.component.html',
  styleUrls: ['./document-upload-list.component.css']
})
export class DocumentUploadListComponent implements OnInit {
  fileUpload: DocumentModal;
  DocumentArray: DocumentModal[] = []
  fileId: number = 0;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //localStorage.removeItem('document-upload')
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('document-upload')))) {
      this.DocumentArray = JSON.parse(localStorage.getItem('document-upload')).filter((x: { IsFileDeleted: boolean; }) => x.IsFileDeleted === false);
    }
  }

  importFile(event: any) {
    if (event.target.files.length == 0) {
      return
    }
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('document-upload')))) {
      this.fileId = JSON.parse(localStorage.getItem('document-upload'))[JSON.parse(localStorage.getItem('document-upload')).length - 1].FileUploadId;
    }
    var reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      this.fileUpload = {
        Label: JSON.parse(localStorage.getItem('userList')).filter((x: { IsActive: boolean; }) => x.IsActive === true)[0].FullName,
        FileName: event.target.files[0].name,
        FileUploadId: this.fileId + 1,
        FilePath: reader.result as string,
        IsFileDeleted: false,
        FileType: event.target.files[0].type
      }
      this.DocumentArray.push(this.fileUpload);
      localStorage.setItem('document-upload', JSON.stringify(this.DocumentArray));
      this.ngOnInit();
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }

  showModal(id: any): void {
    let initialState = { message: 'popup message', title: 'Confirm File Deletion' };
    let modalConfig = { class: 'modal-sm' };
    this.bsModalRef = this.modalService.show(ConfirmationPopupComponent,
      Object.assign(modalConfig, { initialState }));
    this.bsModalRef.content.onClose = new Subject<boolean>();
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      if (result === true) {
        if (this.checkArrayExist(JSON.parse(localStorage.getItem('document-upload')))) {
          const documentArray = JSON.parse(localStorage.getItem('document-upload'));
          const index = JSON.parse(localStorage.getItem('document-upload')).findIndex((x: { FileUploadId: any; }) => x.FileUploadId === id);
          const array = JSON.parse(localStorage.getItem('document-upload'))[index];
          array.IsFileDeleted = result;
          documentArray[index] = array;
          localStorage.setItem('document-upload', JSON.stringify(documentArray));
          this.ngOnInit();
        }
      }
    });
  }

  editModal(id: any): void {
    let initialState = {
      data: JSON.parse(localStorage.getItem('document-upload')).filter((x: { FileUploadId: number; }) => x.FileUploadId === id)[0].FileName,
      title: 'Edit',
      fileId: id
    };
    let modalConfig = { class: 'modal-md' };
    this.bsModalRef = this.modalService.show(EditComponentComponent, Object.assign(modalConfig, { initialState }));
    this.bsModalRef.content.onClose = new Subject<boolean>();
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      if (result !== undefined && result !== null) {
        this.ngOnInit();
      }
    });
  }

  preViewModal(id: any): void {
    debugger
    let initialState = {
      data: JSON.parse(localStorage.getItem('document-upload')).filter((x: { FileUploadId: number; }) => x.FileUploadId === id)[0].FilePath,
      title: 'View Image'
    };
    let modalConfig = { class: 'modal-sm' };
    this.bsModalRef = this.modalService.show(PreviewComponent, Object.assign(modalConfig, { initialState }));
    this.bsModalRef.content.onClose = new Subject<boolean>();
  }
}
