import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    static _BaseUrl:string;


  constructor(private _http: Http) { }
  loggedIn = false;

  login(user, password) {
    this.getDateTime();
    if (user && password) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

    getDateTime() {
      var data:string;
      var waitForResponse = true;;

        this._http.get('http://date.jsontest.com/')
            .toPromise()
            .then(response => {
                console.log(response.json());
                waitForResponse = false;
                console.log("waitForResponse: " + waitForResponse);         
                
                data = response.json();
                console.log("data recieved.");         
            })
            .catch(this.handleError);
        
        console.log("while begin");         
        while(waitForResponse){
            continue;
        }   
        console.log("getDateTime End");         
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
