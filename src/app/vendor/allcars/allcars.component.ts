import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatastorageserviceService } from 'src/app/datastorageservice.service';


export interface userElement {
  firstName: string;
  LastName: string;
  email: string;
  mobile: number;
  password:string;
}

let Data: userElement[] = [];


@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent implements OnInit {
  fetched = false;
  vehicles: any;
  users:any;
  dataSource = new MatTableDataSource(Data);

  constructor(
    private ds:DatastorageserviceService
  ){}

  ngOnInit(): void {
    this.allVehicles()
    this.allUsers()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
        Data=this.users;

      },
      (error) => {
        console.error(error);
      }
    );
  }

}
