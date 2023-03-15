import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizaPageRoutingModule } from './personaliza-routing.module';

import { PersonalizaPage } from './personaliza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizaPageRoutingModule
  ],
  declarations: [PersonalizaPage]
})
export class PersonalizaPageModule {}
