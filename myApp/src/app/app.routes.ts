import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.page').then((m) => m.NewPage),
  },
  {
    path: 'water',
    loadComponent: () => import('./water/water.page').then((m) => m.WaterPage),
  },
];
