import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { InicioProfesorPageRoutingModule } from './inicio-profesor-routing.module';

import { InicioProfesorPage } from './inicio-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioProfesorPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [InicioProfesorPage]
})
export class InicioProfesorPageModule {}
