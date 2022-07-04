import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userName: string
  constructor() { }

  ngOnInit(): void {
    if(this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))){
      const userLogin = JSON.parse(localStorage.getItem('userList')).filter((x: { IsActive: boolean; })=>x.IsActive === true)
      if (this.checkArrayExist(userLogin)) {
        this.userName = userLogin[0].Email;
      }
    }
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }

}
