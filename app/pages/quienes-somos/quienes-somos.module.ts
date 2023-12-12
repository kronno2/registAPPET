import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienesSomosPageRoutingModule } from './quienes-somos-routing.module';

import { QuienesSomosPage } from './quienes-somos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienesSomosPageRoutingModule
  ],
  declarations: [QuienesSomosPage]
})
export class QuienesSomosPageModule {}
