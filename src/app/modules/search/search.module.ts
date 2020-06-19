import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPage } from './pages/search/search.page'

@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
