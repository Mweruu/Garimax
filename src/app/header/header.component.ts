import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  signin = false;
  firstName!:any;
  lastName!:any;

  constructor(){}

  async ngOnInit(){
    this.names()
  }
  names(){
    this.firstName= 'Christine';
    this.lastName = 'Mweru';
  }
}
