import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizaPage } from './personaliza.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizaPageRoutingModule {}
