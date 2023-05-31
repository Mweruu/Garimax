import { Component } from '@angular/core';
import { DatastorageserviceService } from '../datastorageservice.service';
import { AuthService } from '../auth.service';
import { AllcarsComponent } from '../vendor/allcars/allcars.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  signin = false;
  firstName!:any;
  lastName!:any;
  users:any;
  currentUser!: string;

  constructor(public ds: DatastorageserviceService,
              public allcars:AllcarsComponent,
              private authService: AuthService){
              this.currentUser = authService.getCurrentUser();
            }

  async ngOnInit(){
    this.names()
    // this.signIn()
  }

  names(){
    this.firstName= 'Christine';
    this.lastName = 'Mweru';
  }
  signOut(){
    this.signin = false
  }
  signIn(){
    this.signin = true
  }

}

