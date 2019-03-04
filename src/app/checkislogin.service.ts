import { Injectable } from '@angular/core';
import { IRegister } from './IRegister';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CheckisloginService {
	public loginOrNot : boolean; 
    constructor() { }
    
    isLogin(loginOrNot): Observable<any[]> {
    	this.loginOrNot = false; 
        return loginOrNot;
    }
}
