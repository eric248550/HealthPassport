import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonInformationPageRoutingModule } from './person-information-routing.module';

import { PersonInformationPage } from './person-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonInformationPageRoutingModule
  ],
  declarations: [PersonInformationPage]
})
export class PersonInformationPageModule {}
