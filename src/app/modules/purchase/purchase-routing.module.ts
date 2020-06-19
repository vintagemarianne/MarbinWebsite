import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasePage } from './pages/purchase/purchase.page';

const routes: Routes = [
    { path: '', component: PurchasePage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule { }
