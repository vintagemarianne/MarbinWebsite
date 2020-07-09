import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './pages/signup/signup.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
    { path: 'signup', component: SignupPage },
    { path: 'login', component: LoginPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule { }
