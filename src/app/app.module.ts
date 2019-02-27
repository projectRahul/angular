import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterService } from './register.service';
import { BaseurlService } from './baseurl.service';
// import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pnf/page-not-found.component';

import { HomeModule } from './home/home.module';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
    NotifierModule
  ],
  providers: [RegisterService,BaseurlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
