import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatastorageserviceService } from 'src/app/datastorageservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  signin = false;
  clicked = false;
  user = {firstName:'', lastName:'',email:'',phoneNumber:'',password:''};

  loginForm = this.fb.group(
    {
    email:['', Validators.required],
    password:['', Validators.required],

  });
  constructor( private fb:FormBuilder,
               private ds: DatastorageserviceService){}

  login(){
    this.clicked=true;
    this.ds.userLogin(this.user).subscribe(
      response => {
        console.log('User created successfully!', response);
        // Handle success response here
      },
      error => {
        console.error('Failed to create user:', error);
        // Handle error response here
      }
    );
  }
}
