import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TopMenuComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class GenericComponentsModule { }
