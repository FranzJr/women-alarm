import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodoPageRoutingModule } from './periodo-routing.module';

import { PeriodoPage } from './periodo.page';
import { GenericComponentsModule } from '../../generic-components/generic-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodoPageRoutingModule,
    GenericComponentsModule
  ],
  declarations: [PeriodoPage]
})
export class PeriodoPageModule {}
