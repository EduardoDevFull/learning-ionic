import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs-navigation/tabs-navigation.page').then(
        (m) => m.TabsNavigationPage,
      ),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'water',
        loadComponent: () =>
          import('./water/water.page').then((m) => m.WaterPage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
