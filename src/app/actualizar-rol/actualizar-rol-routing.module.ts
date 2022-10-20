import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarRolPage } from './actualizar-rol.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarRolPageRoutingModule {}
