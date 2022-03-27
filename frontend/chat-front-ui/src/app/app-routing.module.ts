import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RegistersuccesComponent} from "./registersucces/registersucces.component";

const routes: Routes = [
  {  path:'' ,component:RegisterComponent},
  {  path:'registrationSuccesfull',component:RegistersuccesComponent},
  {  path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
