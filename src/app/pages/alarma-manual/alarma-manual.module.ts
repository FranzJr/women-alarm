import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmaManualPageRoutingModule } from './alarma-manual-routing.module';

import { AlarmaManualPage } from './alarma-manual.page';
import { GenericComponentsModule } from '../../generic-components/generic-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmaManualPageRoutingModule,
    GenericComponentsModule
  ],
  declarations: [AlarmaManualPage]
})
export class AlarmaManualPageModule {}
