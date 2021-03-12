import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu/:dispenserID',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'person-information/:dispenserID',
    loadChildren: () => import('./pages/person-information/person-information.module').then(m => m.PersonInformationPageModule)
  },
  {
    path: 'dispenser/:dispenserID',
    loadChildren: () => import('./pages/dispenser/dispenser.module').then(m => m.DispenserPageModule)
  },
  {
    // 'ID' for show dispenser detail
    // 'dispenserID' for initiated setting
    path: 'dispenser/dispenser-detail/:ID/:dispenserID',
    loadChildren: () => import('./pages/dispenser/dispenser-detail/dispenser-detail.module').then(m => m.DispenserDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
