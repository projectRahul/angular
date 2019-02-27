import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  public isUserLoggedIn: boolean;

  constructor() {
  	if(sessionStorage.getItem('userLoginId') !='' && sessionStorage.getItem('userLoginId') !='null' && sessionStorage.getItem('userLoginId') !='0'){
  		this.isUserLoggedIn=true;
  	}else{
  		this.isUserLoggedIn=false;
  	}
  }
}
