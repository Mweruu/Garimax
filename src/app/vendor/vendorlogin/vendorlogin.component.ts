import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent {
  hide = true;
  individualLoginForm = this.fb.group(
    {
    email:['', Validators.required],
    password:['', Validators.required]
  });
  loginForm = this.fb.group(
    {
    email:['', Validators.required],
    companyName:['', Validators.required],
    password:['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
  ){}

}
