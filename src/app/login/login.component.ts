import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // standalone: true,

})
export class LoginComponent {
  hide = true;
  signin = false;
  clicked = false;
  loginFormControl = new FormControl('', [Validators.required, Validators.email]);
  //   {
  //   firstName:['', Validators.required],
  //   lastName:['', Validators.required],
  //   email:['', [Validators.required, Validators.email]],
  //   phoneNumber:['', Validators.required],

  // });
  loginForm = this.fb.group(
    {
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    phoneNumber:['', Validators.required],
    password:['', Validators.required],

  });

  constructor(
    private fb: FormBuilder,
  ){}

  signIn(){
    this.signin = true;

  }
  login(){
    this.clicked=true;
  }
}
