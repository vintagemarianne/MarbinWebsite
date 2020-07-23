import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { CenteredModalComponent } from './components/centered-modal/centered-modal.component';

@NgModule({
  declarations: [SearchInputComponent, HeaderComponent, CenteredModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent,
    HeaderComponent,
    CenteredModalComponent
  ]
})
export class SharedModule { }
