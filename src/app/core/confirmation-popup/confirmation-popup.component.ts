import { Component, Input, EventEmitter, OnInit, Output, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef  } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
  public onClosePopup: Subject<boolean>;
  title?: string;
  class?:string;
  constructor(private bsModalRef: BsModalRef) { 
    debugger
  }

  ngOnInit() {
    debugger
    this.onClosePopup = new Subject();
  }

  onConfirm(){
    this.bsModalRef.content.onClose.next(true);
    this.bsModalRef.hide();
  }

  onCancel() {
    this.bsModalRef.content.onClose.next(false);
    this.bsModalRef.hide();
  }
}