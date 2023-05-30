import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatastorageserviceService } from 'src/app/datastorageservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  hide = true;
  signin = false;
  isSubmitted = false;
  loginForm!: FormGroup;
  user = {email:'', password:''};
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor( private fb:FormBuilder,
               private ds: DatastorageserviceService,
               private router: Router,
               private snackBar: MatSnackBar
               ){}


  ngOnInit(){
    this.loginForm = this.fb.group(
      {
      email:this.emailControl,
      password:this.passwordControl,
    });
  }

  showAlert(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 30000, // Display duration in milliseconds
      panelClass: ['alert-top'],
    });
  }

  login(email: string, password: string){
    this.isSubmitted = true;
    this.ds.userLogin({ email, password }).subscribe(
      response => {
        console.log('User authenticated', response);
        console.log(response.message)
        // Handle success response here
        if(response.message == "Wrong credentials, confirm password/email" ){
          this.showAlert("Wrong credentials, confirm password/email")
          return;
        }
        else{
          this.showAlert(" User Authenticated ")
          this.router.navigate(['/']);}
      },
      error => {
        console.error('Failed to create user:', error);
        console.log(error.error.error)
        this.showAlert(error.error.error)
      }
    );
    if(this.loginForm.invalid){
      return;
    }else{
    const user={
      email:this.loginForm.get('email')!.value,
      password:this.loginForm.get('password')!.value,
    }
  }
  }

  onSubmit(){
    this.isSubmitted = true;

    if(this.loginForm.invalid){
      return;
    }
    alert("Success")
    const user={
      email:this.loginForm.get('email')!.value,
      password:this.loginForm.get('password')!.value,
    }
    this.router.navigate(['/']);
  }
}
