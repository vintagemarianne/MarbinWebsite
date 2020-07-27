import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';

@NgModule({
  declarations: [
    HomePage,
    TopBarComponent,
    AboutUsComponent,
    FeaturedProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
