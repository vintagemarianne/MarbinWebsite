import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Product } from '@shr/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  
  constructor() { }

  swiperConfig: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    loop: false
  };

  ngOnInit(): void {
  }

}
