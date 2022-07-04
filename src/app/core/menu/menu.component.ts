import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      const index = JSON.parse(localStorage.getItem('userList')).map((item: { IsActive: any; }) => item.IsActive).indexOf(true);
      const userList = JSON.parse(localStorage.getItem('userList'));
      userList[index]['IsActive'] = false;
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    this.router.navigate(["/"]);
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }
}
