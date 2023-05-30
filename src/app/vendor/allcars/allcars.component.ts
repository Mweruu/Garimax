import { Component, OnInit } from '@angular/core';
import { DatastorageserviceService } from 'src/app/datastorageservice.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent implements OnInit {
  fetched = false;
  vehicles: any;
  users:any;

  constructor(
    private ds:DatastorageserviceService
  ){}

  ngOnInit(): void {
    this.allVehicles()
    this.allUsers()
  }

  allVehicles(){
    this.fetched = false;

    this.ds.getVehicles()
    // .subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.vehicles = response.user;
    //     this.fetched = true

    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
  allUsers(){
    this.fetched = false;

    this.ds.getUser().subscribe(
      (users) => {
        console.log(users.user);
        this.users = users.user;
        this.fetched = true

      },
      (error) => {
        console.error(error);
      }
    );
  }

}
