import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.css']
})
export class ChangeImageComponent implements OnInit {

  public loginUserImage: string;

  selectedFile : File = null;
  private readonly notifier: NotifierService;
  constructor(private userService : UserService,
  			  private router: Router,
    		  private notifierService: NotifierService) { 
  				this.notifier = notifierService;
  			  }

  ngOnInit() {
  }
  
  onFileSelected(event){
	// console.log(event);
	this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
  	const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
  	fd.append('id', sessionStorage.getItem('userLoginId'));
  	this.userService.uploadImage(fd).subscribe(
  		data => {
  			if(data['status'] =='success'){
  				this.notifier.notify( 'success', 'Image Changed successfully!' );
          sessionStorage.setItem('userImage', sessionStorage.getItem('userLoginId')+'.jpg');
          this.loginUserImage = sessionStorage.getItem('userImage');
  			}else{
  				this.notifier.notify( 'warning', 'Something went wrong' );
  			}
	    }
	);
  }

}
