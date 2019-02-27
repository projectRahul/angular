import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IRegister } from './IRegister';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm : FormGroup;
	user : IRegister;
  private readonly notifier: NotifierService;
  constructor(private rf: FormBuilder,
  	private register_service : RegisterService,
    private router: Router,
    private notifierService: NotifierService) { 
      this.notifier = notifierService;
  }

  ngOnInit() {
  	this.registerForm = this.rf.group({
  		name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  		email: ['',[Validators.required]],
  		mobile: ['',[Validators.required]],
      passwordGroup : this.rf.group({
        password: ['',[Validators.required]],
        confirm_password: ['',[Validators.required]],
      },{ validators : matchPassword}),
  	});
  }

  register(){
      this.register_service.addUser(this.registerForm.value)
        .subscribe( data => {
          if(data.status == 'success'){
            this.notifier.notify( 'success', 'Register successfully!' );
            // this.router.navigate(['login']);
          }else{
            this.notifier.notify( 'warning', 'Something went wrong' );
          }
      });
  }

}

function matchPassword(passwordGroup : AbstractControl) :{[key: string]: any} | null {
    const password = passwordGroup.get('password').value;
    const confirm_password = passwordGroup.get('confirm_password').value;
    // console.log(passwordGroup);
    if(password === confirm_password){
       return null;
    }else{
      return {'passwordGroup' : true};
    }
  }
