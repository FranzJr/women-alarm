import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { IonicModule } from '@ionic/angular';
import { WaMenuComponent } from './wa-menu/wa-menu.component';
import { AlarmMenuComponent } from './alarm-menu/alarm-menu.component';
import { AutomaticAlarmsComponent } from './automatic-alarms/automatic-alarms.component';



@NgModule({
  declarations: [
    TopMenuComponent,
    WaMenuComponent,
    AlarmMenuComponent,
    AutomaticAlarmsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    TopMenuComponent,
    WaMenuComponent,
    AlarmMenuComponent,
    AutomaticAlarmsComponent
  ]
})
export class GenericComponentsModule { }
