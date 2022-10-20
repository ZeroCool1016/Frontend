import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarRolPageRoutingModule } from './actualizar-rol-routing.module';

import { ActualizarRolPage } from './actualizar-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarRolPageRoutingModule
  ],
  declarations: [ActualizarRolPage]
})
export class ActualizarRolPageModule {}
