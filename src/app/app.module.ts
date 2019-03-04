import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterService } from './register.service';
import { BaseurlService } from './baseurl.service';
import { CheckisloginService } from './checkislogin.service';

// import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pnf/page-not-found.component';

import { HomeModule } from './home/home.module';
import { NotifierModule } from 'angular-notifier';
import { SharedModule } from './shared/shared.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // HomeComponent,
    PageNotFoundComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
    NotifierModule,
    SharedModule
  ],
  providers: [RegisterService,BaseurlService,CheckisloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
