import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  signIn(user: User): Observable<any> {
    const body = new HttpParams()
      .set('client', 'angular')
      .set('grant_type', 'password')
      .set('username', user.username)
      .set('password', user.password);

    return this.http.post<any>(`${environment.url}/oauth/token`, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Basic YW5ndWxhcjpAbmd1bGFyIw==')
    });
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public setUser(user) {
    localStorage.setItem('token' , user.access_token);
  }


  // signIn(user: User): Observable<any> {
  //   return  this.http.post(`${environment.url}/oauth/token`,  user);
  //
  // }

}
