import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
	userdata : IUser;
	editUserForm : FormGroup;

  constructor(private userService : UserService,
  			  private router: Router,
  			  private activated_router: ActivatedRoute,
  			  private eu: FormBuilder,) { }

  ngOnInit() {
  	this.editUserForm = this.eu.group({
  		id: ['',[Validators.required]],
  		name: ['',[Validators.required]],
  		email: ['',[Validators.required]],
  		mobile: ['',[Validators.required]],
  		password: ['',[Validators.required]]
  	});

  	this.activated_router.queryParams.subscribe(params => {
        const userId = params['userid'];
        if(userId=='' || typeof userId=='undefined'){
        	this.router.navigate(['./listuser']);
        }else{
        	this.userService.getUserById(userId).subscribe(
		  		data => {
		  			if(data['status'] =='success'){
		  				this.setEditFormValue(data['data']);
		  			}else{
		  				this.userdata = data['data'];
		  			}
			    }
			);
        }
      });
  }

  setEditFormValue(userLoadData : IUser){
  	this.editUserForm.patchValue({
      id: userLoadData.id,
      name: userLoadData.name,
      mobile: userLoadData.mobile,
      email : userLoadData.email,
      password : userLoadData.password
    });
  }

  updateUser(){
  	this.userService.updateUser(this.editUserForm.value)
      .subscribe( data => {
        if(data.status == 'success'){
          this.router.navigate(['listuser']);
        }
    });

  }

}
