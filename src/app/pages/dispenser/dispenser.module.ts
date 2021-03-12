import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispenserPageRoutingModule } from './dispenser-routing.module';

import { DispenserPage } from './dispenser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispenserPageRoutingModule
  ],
  declarations: [DispenserPage]
})
export class DispenserPageModule {}
