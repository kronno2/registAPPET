import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioProfesorPage } from './inicio-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: InicioProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioProfesorPageRoutingModule {}
