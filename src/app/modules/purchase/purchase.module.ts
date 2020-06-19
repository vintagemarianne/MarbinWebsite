import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchasePage } from './pages/purchase/purchase.page';

@NgModule({
  declarations: [
    PurchasePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
