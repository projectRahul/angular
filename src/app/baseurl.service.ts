import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {
  public baseurl : string = 'http://localhost/api/';
  constructor() { }
  
  getBaseUrl() {
    return this.baseurl;
  }
}
