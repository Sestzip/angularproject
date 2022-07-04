import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/app/modules/shared/utility.service';
import { DocumentModal } from 'src/app/modules/manage-documents/modals/document-modal';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  public onClosePopup: Subject<boolean>;
  title?: string;
  class?: string;
  data?: string;
  fileId: number;
  constructor(private bsModalRef: BsModalRef,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.onClosePopup = new Subject();
  }

  onConfirm() {
    this.bsModalRef.content.onClose.next(this.data);
    this.bsModalRef.hide();
  }

  onCancel() {
    this.bsModalRef.content.onClose.next(false);
    this.bsModalRef.hide();
  }

  importFile(event: any) {    
    if (event.target.files.length == 0) {
      return
    }
    if (this.utilityService.checkArrayExist(JSON.parse(localStorage.getItem('document-upload')))) {
      const fileIndex = JSON.parse(localStorage.getItem('document-upload')).findIndex((x: { FileUploadId: number; }) => x.FileUploadId === this.fileId);
      const DocumentArray = JSON.parse(localStorage.getItem('document-upload')).filter((x: { IsFileDeleted: boolean; }) => x.IsFileDeleted === false);

      this.data = event.target.files[0].name;
      let fileUpload = JSON.parse(localStorage.getItem('document-upload')).filter((x: { FileUploadId: number; }) => x.FileUploadId === this.fileId);
      var reader: FileReader = new FileReader();
      reader.onloadend = (e) => {
        fileUpload[0].Label = JSON.parse(localStorage.getItem('userList')).filter((x: { IsActive: boolean; }) => x.IsActive === true)[0].FullName,
          fileUpload[0].FileName = event.target.files[0].name,
          fileUpload[0].FileUploadId = this.fileId + 1,
          fileUpload[0].FilePath = reader.result as string,
          fileUpload[0].IsFileDeleted = false,
          fileUpload[0].FileType = event.target.files[0].type

        DocumentArray[fileIndex] = fileUpload[0];
        localStorage.setItem('document-upload', JSON.stringify(DocumentArray));
        fileUpload = null;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}