import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecuperarPassRoutingModule } from './recuperar-pass-routing.module';
import {RecuperarPassComponent} from './recuperar-pass.component';

@NgModule({
  declarations: [RecuperarPassComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPassRoutingModule
  ]
})
export class RecuperarPassModule { }
