import { Component } from '@angular/core';

import { IRegister } from './IRegister';
import { CheckisloginService } from './checkislogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  public loginOrNot: boolean = false;

  constructor(public check_is_login_service : CheckisloginService) {
    // if(sessionStorage.length == 0 || sessionStorage.getItem('userLoginId') =='0'){
    //   this.isUserLoggedIn=false;
    // }else{
    //   this.isUserLoggedIn=true;
    // }
  }

  ngOnInit() {
     // if(sessionStorage.length == 0 || sessionStorage.getItem('userLoginId') =='0'){
    //   this.isUserLoggedIn=false;
    // }else{
    //   this.isUserLoggedIn=true;
    // }
    this.check_is_login_service.isLogin(this.loginOrNot)
      .subscribe( data => {
        console.log(data+'==============');
    });
  }
}

/*
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
*/