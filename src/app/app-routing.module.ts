import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pnf/page-not-found.component';

const routes: Routes = [
	{path: 'login', component : LoginComponent},
	{path: 'register', component : RegisterComponent},
	{path: 'home', component : HomeComponent},
	{path: '', redirectTo : '/login', pathMatch: 'full'},
	{path : '**',component : PageNotFoundComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
