import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ConfirmationPopupComponent } from 'src/app/core/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[];
  bsModalRef: BsModalRef;
  popupOpen: boolean = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem('userList')).filter((
      x: { IsActive: boolean; IsDeleted: boolean; }) => x.IsActive === false && x.IsDeleted === false)
  }

  showModal(id: any): void {
    // this.bsModalRef = this.modalService.show(ConfirmationPopupComponent, {
    //   animated: true,
    //   backdrop: 'static',
    //   class: 'modal-sm'
    // });
    // this.bsModalRef.content.onClose = new Subject<boolean>();
    // this.bsModalRef.content.onClose.subscribe((result: any) => {
    //   if (result === true) {
    //     console.log(result);
    //   }
    // }
  }
}
