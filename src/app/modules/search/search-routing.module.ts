import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './pages/search/search.page';
import { DetailPage } from './pages/product-detail/detail.page';

const routes: Routes = [
    { path: 'results', component: SearchPage },
    { path: 'details', component: DetailPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }
