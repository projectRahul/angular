import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LogoutComponent } from './logout/logout.component';

import { UserService } from './user.service';
import { EdituserComponent } from './edituser/edituser.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChangeImageComponent } from './change-image/change-image.component';

@NgModule({
  declarations: [
  	HomeComponent,
  	DashboardComponent,
  	ListuserComponent,
  	LogoutComponent,
  	EdituserComponent,
  	ChangeImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports : [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
})
export class HomeModule { }
