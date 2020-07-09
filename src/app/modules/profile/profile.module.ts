import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPage } from './pages/signup/signup.page';

import { PurchaseRoutingModule } from './profile-routing.module';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [
    SignupPage,
    LoginPage
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class ProfileModule { }
