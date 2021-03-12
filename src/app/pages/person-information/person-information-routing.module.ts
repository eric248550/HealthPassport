import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonInformationPage } from './person-information.page';

const routes: Routes = [
  {
    path: '',
    component: PersonInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonInformationPageRoutingModule {}
