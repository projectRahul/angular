import { Injectable } from '@angular/core';
import { IRegister } from './IRegister';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class RegisterService {
    constructor(private httpClient: HttpClient,
                private baseurl : BaseurlService) { }

    baseUrl = this.baseurl.getBaseUrl();

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    addUser(user: IRegister): Observable<IRegister> {
        return this.httpClient.post<IRegister>(this.baseUrl+'register.php', user)
        .pipe(catchError(this.handleError));
    }
    
    loginUser(user: IRegister): Observable<IRegister> {
        return this.httpClient.post<IRegister>(this.baseUrl+'login.php', user)
        .pipe(catchError(this.handleError));
    }
}
