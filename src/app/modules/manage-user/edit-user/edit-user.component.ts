import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail } from '../../account/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup
  userId: number;
  userList:UserDetail[] = [];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.userId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      FullName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]]
    });

    this.initialiseForm()
  }

  onSubmit(formValue: FormGroup) {
      const userLogin = JSON.parse(localStorage.getItem('userList')).filter((x: { Email: string; }) => x.Email === formValue.value.Email)
      if (userLogin.length > 0) {
        let itemIndex = JSON.parse(localStorage.getItem('userList')).findIndex((x: { Email: string; }) => x.Email === formValue.value.Email)
        this.userList = JSON.parse(localStorage.getItem('userList'));
        this.userList[itemIndex].FullName = formValue.value.FullName;
        this.userList[itemIndex].Email = formValue.value.Email;
        localStorage.setItem('userList', JSON.stringify(this.userList));
        this.editUserForm.reset();
        this.userList = [];
        this.router.navigate(['manage-user']);
      }
  }

  initialiseForm() {
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('userList')))) {
      const userLogin = JSON.parse(localStorage.getItem('userList')).filter((x: { Id: number; }) => x.Id === Number(this.userId))
      if (userLogin.length > 0) {
        this.editUserForm.patchValue(userLogin[0]);
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
