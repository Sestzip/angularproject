import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetail } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loginDetail: LoginDetail;
  errorMessage: boolean = false;
  userList: any[];
  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.errorMessage = false;
    })
  }

  onSubmit(formValue: FormGroup) {
    this.loginDetail = {
      Email: formValue.value.Email,
      Password: formValue.value.Password
    }
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      const user = JSON.parse(localStorage.getItem('userList')).filter((x: { Email: string; Password: string; }) =>
        x.Email === this.loginDetail.Email && x.Password === this.loginDetail.Password)
      if (this.checkArrayExist(user)) {
        this.userList = JSON.parse(localStorage.getItem('userList'));
        this.userList.find(x => x.Email == formValue.value.Email).IsActive = true;
        localStorage.removeItem('userList');
        localStorage.setItem('userList', JSON.stringify(this.userList));
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = true;
      }
    } else {
      this.errorMessage = true;
    }
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }


}

