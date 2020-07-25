import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './pages/signup/signup.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
    { path: 'signup', component: SignupPage },
    { path: 'login', component: LoginPage },
    { path: 'user', component: ProfilePage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule { }
