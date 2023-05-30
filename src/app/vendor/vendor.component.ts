import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DatastorageserviceService } from '../datastorageservice.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit{
  users: any[] = [];


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,
              private ds:DatastorageserviceService
    ) {}

  ngOnInit(){
    this.allUsers()
  }

  uploadCar(){
    this.ds.createVehicle()
    // .subscribe(
    //   response => {
    //     console.log('Vehicle created successfully!', response);
    //     // Handle success response here
    //   },
    //   error => {
    //     console.error('Failed to create Vehicle:', error);
    //     // Handle error response here
    //   }
    // );

  }


  // this.signin = true;
  // if(this.signupForm.invalid){
  //   return;
  // }
  // alert("Success")

  // this.router.navigate(['/']);

  allUsers(){
    // this.fetched = false;

    this.ds.getUser().subscribe(
      (users) => {
        console.log(users.user);
        this.users = users.user;
        // this.fetched = true

      },
      (error) => {
        console.error(error);
      }
    );
  }

}
