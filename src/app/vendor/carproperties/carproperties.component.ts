import { Component } from '@angular/core';
import { DatastorageserviceService } from 'src/app/datastorageservice.service';

@Component({
  selector: 'app-carproperties',
  templateUrl: './carproperties.component.html',
  styleUrls: ['./carproperties.component.css']
})
export class CarpropertiesComponent {
  users: any[] = [];

  constructor(private ds:DatastorageserviceService,){}

  allUsers(){
    this.ds.getUser().subscribe(
      (users) => {
        console.log(users.user);
        this.users = users.user;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
