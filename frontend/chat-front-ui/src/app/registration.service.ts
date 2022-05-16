import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }



  public LoginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("/users/login",user);
  }

  public registerUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("/users/add",user);
  }


}
