import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoPageRoutingModule } from './metodo-routing.module';

import { MetodoPage } from './metodo.page';
import { GenericComponentsModule } from '../../generic-components/generic-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoPageRoutingModule,
    GenericComponentsModule
  ],
  declarations: [MetodoPage]
})
export class MetodoPageModule {}
