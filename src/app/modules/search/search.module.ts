import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shr/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPage } from './pages/search/search.page';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { DetailPage } from './pages/product-detail/detail.page';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

@NgModule({
  declarations: [
    SearchPage,
    ResultItemComponent,
    DetailPage,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ]
})
export class SearchModule { }
