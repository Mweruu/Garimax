import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent {
  hide = true;
  loginForm = this.fb.group(
    {
    name:['', Validators.required],
    email:['', Validators.required],
    idnumber:['', Validators.required],
    password:['', Validators.required],
    phoneNumber:['', Validators.required],
    companyName:['', Validators.required],
    location:['', Validators.required],
    krapin:['', Validators.required],
  });
  constructor( private fb:FormBuilder){}

}
