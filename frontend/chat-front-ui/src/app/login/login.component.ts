import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RegistrationService} from "../registration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private _service:RegistrationService) { }


  ngOnInit(): void {
  }

  LoginUser(){
    this._service.LoginUserFromRemote(this.user).subscribe(
      data => console.log("responce recived"), error =>console.log("exception occured")
    )
  }
}
