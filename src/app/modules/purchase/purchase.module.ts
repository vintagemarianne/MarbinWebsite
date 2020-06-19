import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';

import { PurchaseRoutingModule } from './purchase-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
