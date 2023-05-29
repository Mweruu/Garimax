import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DatastorageserviceService } from '../datastorageservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // standalone: true,

})
export class LoginComponent {
  hide = true;
  signin = false;
  user = {firstName:'', lastName:'',email:'',mobile:'', password:''};
  loginFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm :FormGroup

  constructor(
    private fb: FormBuilder,
    private ds: DatastorageserviceService
  ){
    this.loginForm =this.fb.group(
      {
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      password:['', Validators.required],

    });
  }

  signUp(){
    this.ds.createUser(this.user).subscribe(
        response => {
          console.log('User created successfully!', response);
          // Handle success response here
        },
        error => {
          console.error('Failed to create user:', error);
          // Handle error response here
        }
      );

    this.signin = true;
  }

}
