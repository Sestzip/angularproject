import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/app/modules/shared/utility.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  public onClosePopup: Subject<boolean>;
  title?: string;
  class?: string;
  data?: string;
  constructor(private bsModalRef: BsModalRef) {
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
}