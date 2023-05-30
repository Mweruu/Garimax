import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DatastorageserviceService } from '../../datastorageservice.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // standalone: true,

})
export class LoginComponent implements OnInit{
  hide = true;
  signin = false;
  user = {firstName:'', lastName:'',email:'',mobile:'', password:'',confirmPassword:''};
  // loginFormControl = new FormControl('', [Validators.required, Validators.email]);
  signupForm! :FormGroup
  isSubmitted = false;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  mobileControl = new FormControl('', [Validators.required, Validators.minLength(9)]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  activeTabIndex = 0;


  constructor(
    private fb: FormBuilder,
    private ds: DatastorageserviceService,
    private router: Router
  ){}


  ngOnInit(){
    this.signupForm =this.fb.group(
      {
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:this.emailControl,
      mobile:this.mobileControl,
      password:this.passwordControl,
      confirmPassword:['', Validators.required]
    });
  }

  tabChanged(event: MatTabChangeEvent): void {
    this.activeTabIndex = event.index;
  }

  signUp(){
    this.isSubmitted = true;

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
    if(this.signupForm.invalid){
      return;
    }
    alert("Success")

    this.router.navigate(['/']);
  }


  passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPassword;
  }


  onSubmit(){
    this.isSubmitted = true;
    if(this.signupForm.invalid){
      return;
    }
    alert("Success")

    this.router.navigate(['/']);
  }

}
