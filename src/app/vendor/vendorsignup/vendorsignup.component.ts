import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent {
  hide = true;
  checkboxChecked: boolean = false;
  individualLoginForm = this.fb.group({
                    name:['', Validators.required],
                    email:['', Validators.required],
                    idnumber:['', Validators.required],
                    password:['', Validators.required],
                  });
  loginForm = this.fb.group({
                  email:['', Validators.required],
                  companyName:['', Validators.required],
                  krapin:['', Validators.required],
                  phoneNumber:['', Validators.required],
                  address:['', Validators.required],
                  location:['', Validators.required],
                  password:['', Validators.required],
  });


  constructor( private fb:FormBuilder){}

}
