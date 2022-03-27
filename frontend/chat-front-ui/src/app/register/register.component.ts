import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }


  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("responce recived");
        this._router.navigate(['/registrationSuccesfull'])
      }, error =>console.log("exception occured")
    )
  }
}
