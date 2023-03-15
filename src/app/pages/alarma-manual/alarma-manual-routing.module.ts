import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmaManualPage } from './alarma-manual.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmaManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmaManualPageRoutingModule {}
