import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent {
  hide = true;
  loginForm = this.fb.group(
    {
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    phoneNumber:['', Validators.required],
    companyName:['', Validators.required],
    password:['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
  ){}

}
