import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LogoutComponent } from './logout/logout.component';

import { EdituserComponent } from './edituser/edituser.component';

import { ChangeImageComponent } from './change-image/change-image.component';


const routes: Routes = [
	{path: 'dashboard', component : DashboardComponent},
	{path: 'listuser', component : ListuserComponent},
	{path: 'edituser', component : EdituserComponent},
	{path: 'logout', component : LogoutComponent},
	{path: 'change_image', component : ChangeImageComponent},
	{path: 'home', redirectTo : 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
