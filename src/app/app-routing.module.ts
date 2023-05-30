import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VendorsignupComponent } from './vendor/vendorsignup/vendorsignup.component';
import { VendorComponent } from './vendor/vendor.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'',
  component:HomepageComponent
  },
  {
    path:'userlogin',
  component:LoginComponent
  },
  {
    path:'register',
  component:RegisterComponent
  },
  {
    path:'vendorlogin',
  component:VendorloginComponent
  },
  {
    path:'vendorsignup',
  component:VendorsignupComponent
  },
  {
    path:'uploadcar',
  component:VendorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
