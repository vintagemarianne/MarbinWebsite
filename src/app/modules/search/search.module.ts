import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';

import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
