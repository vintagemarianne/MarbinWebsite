import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PurchaseRoutingModule } from './profile-routing.module';

import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { ProfilePage } from './pages/profile/profile.page';

@NgModule({
  declarations: [
    SignupPage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
