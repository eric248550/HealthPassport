import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispenserDetailPage } from "./dispenser-detail.page";

const routes: Routes = [
  {
    path: '',
    component: DispenserDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispenserDetailPageRoutingModule {}
