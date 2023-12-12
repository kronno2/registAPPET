import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RecuperarPassComponent} from './recuperar-pass.component';
const routes: Routes = [
  {
    path: '',
    component: RecuperarPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarPassRoutingModule { }
