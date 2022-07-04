import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ChatModal } from '../modals/chat-modal';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {
  chatModal: ChatModal;
  date = new Date();
  data: string = "";
  chatForm: FormGroup;
  chatArray: ChatModal[] = [];
  userName: string;
  url: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.chatForm = this.fb.group({
      chatField: ['', [Validators.required]]
    });
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      const userLogin = JSON.parse(localStorage.getItem('userList')).filter((x: { IsActive: boolean; }) => x.IsActive === true)
      if (this.checkArrayExist(userLogin)) {
        this.userName = userLogin[0].FullName.split(' ')[0];
        if (this.checkArrayExist(JSON.parse(localStorage.getItem('groupChat')))) {
          this.chatArray = JSON.parse(localStorage.getItem('groupChat'));
        }
      }
    }
  }

  sendMessage(value: boolean) {
    const today = new Date();
    this.data = this.chatForm.controls['chatField'].value;
    let currentDate = formatDate(today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.chatModal = {
      SendMessage: value === false ? this.data : JSON.parse(localStorage.getItem('recent-image')),
      SendName: this.userName,
      SendTime: currentDate,
      SendImage: value === false ? false : true,
      ReceiveMessage: '',
      ReceiveName: 'System',
      ReceiveTime: '',
      ReceiveImage: value === false ? false : true,
    };

    this.chatArray.push(this.chatModal);
    var index = this.chatArray.filter(x => x.SendTime === currentDate);
    setTimeout(() => {
      index[0].ReceiveMessage = value === false ? this.data : JSON.parse(localStorage.getItem('recent-image'));
      var newDate = today.setSeconds(today.getSeconds() + 3);
      index[0].ReceiveTime = formatDate(newDate, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      localStorage.setItem('groupChat', JSON.stringify(this.chatArray));
      localStorage.removeItem('recent-image');
    }, 3000);

    this.chatForm.reset();
  }

  importFile(event: any) {
    if (event.target.files.length == 0) {
      return
    }
    var reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      localStorage.setItem('recent-image', JSON.stringify(reader.result));
      this.sendMessage(true);
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }
}


