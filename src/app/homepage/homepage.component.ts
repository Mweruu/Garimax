import { Component, OnInit } from '@angular/core';
import { DatastorageserviceService } from '../datastorageservice.service';
// import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  user!:string;
  users:any;
  fetched = false;

  constructor(
      public ds: DatastorageserviceService
  ){}

  ngOnInit(){
    this.allUsers()
  }


  allUsers(){
    this.fetched = false;

    this.ds.getUser().subscribe(
      (users) => {
        console.log(users);
        this.users = users.user;
        this.fetched = true

      },
      (error) => {
        console.error(error);
      }
    );
  }

}
