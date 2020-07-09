import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SearchInputComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
