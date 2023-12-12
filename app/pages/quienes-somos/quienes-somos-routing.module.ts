import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuienesSomosPage } from './quienes-somos.page';

const routes: Routes = [
  {
    path: '',
    component: QuienesSomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuienesSomosPageRoutingModule {}
