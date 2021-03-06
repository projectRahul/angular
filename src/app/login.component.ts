import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IRegister } from './IRegister';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  private readonly notifier: NotifierService;

  constructor(private lf: FormBuilder,
    private register_service : RegisterService,
    private router: Router,
    private notifierService: NotifierService) { 
      this.notifier = notifierService;
  }

  ngOnInit() {
  	this.loginForm = this.lf.group({
  		email: ['',[Validators.required]],
  		password: ['',[Validators.required]],
  	});
  }

  // mapFormValuesToLoginModel(){
  //     this.user.email = this.loginForm.value.email;
  //     this.user.password = this.loginForm.value.password;
  //   }
  onSubmit(){
  	// console.log(this.loginForm.value);
    // mapFormValuesToLoginModel();
    this.register_service.loginUser(this.loginForm.value)
      .subscribe( data => {
        console.log(data[0]['status']);
        // if(data.status == 'success'){
        if(data[0]['status'] == '1'){
          // sessionStorage.setItem('userLoginId', data['data']['id']);
          // sessionStorage.setItem('userLoginName', data['data']['name']);
          // sessionStorage.setItem('userImage', data['data']['image']);
          sessionStorage.setItem('userLoginId', data[0]['_id']);
          sessionStorage.setItem('userLoginName', data[0]['name']);
          sessionStorage.setItem('userImage', data[0]['image']);
          this.router.navigate(['./home']);
        }else{
          this.notifier.notify( 'danger', 'Wrong Credentials' );
        }
    });
  }
}
