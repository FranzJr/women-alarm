import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { IonicModule } from '@ionic/angular';
import { WaMenuComponent } from './wa-menu/wa-menu.component';



@NgModule({
  declarations: [
    TopMenuComponent,
    WaMenuComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    TopMenuComponent,
    WaMenuComponent
  ]
})
export class GenericComponentsModule { }
