import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbarazoPageRoutingModule } from './embarazo-routing.module';

import { EmbarazoPage } from './embarazo.page';
import { GenericComponentsModule } from '../../generic-components/generic-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbarazoPageRoutingModule,
    GenericComponentsModule
  ],
  declarations: [EmbarazoPage]
})
export class EmbarazoPageModule {}
