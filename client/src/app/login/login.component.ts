import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageDialogComponent } from "../dialog/message/message.component";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import { LoginService } from '../Service/login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm = new FormGroup({
    user_id: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });
  forgot_password_flag = 'email'

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
    private dialog: MatDialog,
    private login: LoginService) {
  }

  ngOnInit() {
    this.forgot_password_flag = 'email'
  }

  @ViewChild('forgotPassword', { static: true }) editDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, { disableClose: true })
  }

  canSubmit(): boolean {
    return this.signInForm.valid;
  }

  async submit() {
    this.login.login(this.signInForm.controls['user_id'].value, this.signInForm.controls['password'].value)
      .pipe(first())
      .subscribe(
        data => { 
          console.log(data);
          //TODO: add navigation
    })
    sessionStorage.setItem('login', 'true');
    this.router.navigate(['dashboard'])
  }

  changePassword() {
    if (this.forgot_password_flag == 'email') {
      this.forgot_password_flag = 'otp'
      return
    }
    if (this.forgot_password_flag == 'otp') {
      this.forgot_password_flag = 'pass'
      return
    }
    if (this.forgot_password_flag == 'pass') {
      this.forgot_password_flag = 'email'
      this.dialog.closeAll()
      return
    }
  }
}
