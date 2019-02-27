import { Injectable } from '@angular/core';
import { IUser } from './IUser';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from '../baseurl.service';


@Injectable()
export class UserService {
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

    getUserList(): Observable<IUser[]> {
        return this.httpClient.get<IUser[]>(this.baseUrl+'list_user.php')
            .pipe(catchError(this.handleError));
    }

    getUserById(id: number): Observable<IUser[]> {
        return this.httpClient.get<IUser[]>(this.baseUrl+'list_user.php?id='+id)
            .pipe(catchError(this.handleError));
    }

    updateUser(user: IUser): Observable<IUser> {
        return this.httpClient.post<IUser>(this.baseUrl+'update.php', user)
        .pipe(catchError(this.handleError));
    }

    deleteUser(id: number): Observable<IUser> {
        return this.httpClient.post<IUser>(this.baseUrl+'delete.php', id)
        .pipe(catchError(this.handleError));
    }

    uploadImage(filedata): Observable<IUser> {
        return this.httpClient.post<IUser>(this.baseUrl+'change_image.php', filedata)
        .pipe(catchError(this.handleError));
    }
}
