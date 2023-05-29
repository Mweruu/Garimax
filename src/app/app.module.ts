import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialsModule } from './materials/materials.module';
import { LoginComponent } from './login/login.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './login/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    VendorComponent,
    ViewComponent,
    LoginComponent,
    VendorloginComponent,
    VendorsignupComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
