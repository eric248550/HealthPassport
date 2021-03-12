import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispenserPage } from './dispenser.page';

const routes: Routes = [
  {
    path: '',
    component: DispenserPage
  },
  {
    path: 'dispenser-detail',
    loadChildren: () => import('./dispenser-detail/dispenser-detail.module').then(m => m.DispenserDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispenserPageRoutingModule {}
