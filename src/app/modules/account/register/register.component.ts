import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetail } from '../models/user.model';
import Validation from '../service/Validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  passwordNotMatch: boolean = false;
  submitted = false;
  personDetail: UserDetail;
  userList: UserDetail[] = [];
  userId: number = 0;
  message: boolean = false


  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      ConfirmPassword: ['', [Validators.required]]
    },
      {
        validators: [Validation.match('Password', 'ConfirmPassword')]
      })

      this.registrationForm.valueChanges.subscribe(value => {
        this.message = false;
      })
  }

  onSubmit(formValue: FormGroup) {
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      this.userId = JSON.parse(localStorage.getItem('userList'))[JSON.parse(localStorage.getItem('userList')).length - 1].Id;
    }
    this.personDetail = {
      Id: this.userId + 1,
      FullName: formValue.value.FullName,
      Email: formValue.value.Email,
      Password: formValue.value.Password,
      IsActive: false,
      IsDeleted: false
    };

    if (!this.checkUserExist(formValue)) {
      if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
        this.userList = JSON.parse(localStorage.getItem('userList'));
        this.userList.push(this.personDetail);
      }
      else {
        this.userList.push(this.personDetail);
      }
      localStorage.setItem('userList', JSON.stringify(this.userList));
      this.registrationForm.reset();
      this.userList = [];
      this.router.navigate(['account/register-success']);
    } else {
      this.message = true;
    }
  }

  checkUserExist(data: FormGroup) {
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      const userExist = JSON.parse(localStorage.getItem('userList')).filter((x: { Email: any; }) => x.Email === data.value.Email).length > 0;
      return userExist === true ? true : false;
    }
    return false;
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }
}
