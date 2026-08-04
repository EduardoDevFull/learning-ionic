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
    path: 'water',
    loadComponent: () => import('./water/water.page').then((m) => m.WaterPage),
  },
  {
    path: 'tabs-navigation',
    loadComponent: () =>
      import('./tabs-navigation/tabs-navigation.page').then(
        (m) => m.TabsNavigationPage,
      ),
  },
];
