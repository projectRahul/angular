import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginUserImage: string;
	public loginUserName: string;
  constructor(private router: Router) {
  	if(sessionStorage.getItem('userLoginId') !=='' && sessionStorage.getItem('userLoginId') !=='0'){
  		this.loginUserImage = sessionStorage.getItem('userImage');
      this.loginUserName = sessionStorage.getItem('userLoginName');
  	}else{
  		this.router.navigate(['./login']);
  	}
  }

  ngOnInit() {
  }

}
