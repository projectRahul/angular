import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	sessionStorage.setItem('userLoginId', '0');
  	sessionStorage.setItem('userImage', '');
  	sessionStorage.setItem('userLoginName', '');
  	this.router.navigate(['./login']);
  }

}


/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IRegister } from './../../IRegister';
import { CheckisloginService } from './../../checkislogin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public loginOrNot: boolean = false;
  
  constructor(private router: Router,
              private check_is_login_service : CheckisloginService) { }

  ngOnInit() {
    this.check_is_login_service.isLogin(this.loginOrNot)
      .subscribe( data => {
        if(data){
          console.log(data+'==============');
          sessionStorage.setItem('userLoginId', '0');
          sessionStorage.setItem('userImage', '');
          sessionStorage.setItem('userLoginName', '');
          this.router.navigate(['./login']);
        }else{
          this.router.navigate(['./login']);
        }
    });
  }

}
*/