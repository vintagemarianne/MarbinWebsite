import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { CenteredModalComponent } from './components/centered-modal/centered-modal.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [SearchInputComponent, HeaderComponent, CenteredModalComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent,
    HeaderComponent,
    CenteredModalComponent,
    FooterComponent
  ]
})
export class SharedModule { }
