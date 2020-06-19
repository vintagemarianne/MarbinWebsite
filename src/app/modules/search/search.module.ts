import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPage } from './pages/search/search.page'

@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    HttpClientModule
  ]
})
export class SearchModule { }
