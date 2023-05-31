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
import { LoginComponent } from './user/login/login.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorsignupComponent } from './vendor/vendorsignup/vendorsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './user/register/register.component';
import { AllcarsComponent } from './vendor/allcars/allcars.component';
import { CarpropertiesComponent } from './vendor/carproperties/carproperties.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



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
    AllcarsComponent,
    CarpropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    FormsModule
  ],
  providers: [AllcarsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
