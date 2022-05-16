import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registersucces',
  templateUrl: './registersucces.component.html',
  styleUrls: ['./registersucces.component.css']
})
export class RegistersuccesComponent implements OnInit {

  constructor(private _service:RegistrationService, private _router:Router) { }


  ngOnInit(): void {
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/login'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this._router.navigate(navigationDetails);
  }

  confrimation(){
    this._router.navigate(['/login'])
  }

}
