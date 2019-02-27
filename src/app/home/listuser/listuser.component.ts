import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  
  userlist : IUser[];

  constructor(private userService : UserService,
  			  private router: Router) { }

  ngOnInit() {
  	this.userService.getUserList().subscribe(
  		data => {
  			if(data['status'] =='success'){
  				this.userlist = data['data'];
  			}else{
  				this.userlist = [];
  			}
	    }
	);
  }

  editUser(id : number){
  	this.router.navigate(['./edituser'], { queryParams: { userid: id } });
  }
  
  deleteUser(id : number){
  	console.log(id);
    if(confirm('Do you really wanna delete this user !!!?!!!')){
      this.userService.deleteUser(id).subscribe();
      window.location.reload();
    }
    // this.router.navigate(['./listuser']);
  }

}
