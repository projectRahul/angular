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
    if(sessionStorage.length == 0 || sessionStorage.getItem('userLoginId') =='0'){
      this.isUserLoggedIn=false;
    }else{
      this.isUserLoggedIn=true;
    }
  }
}