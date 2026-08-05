import { Routes } from '@angular/router';
import { redirectIfOnboardedGuard, requireOnboardingGuard } from './onboarding/onboarding.guard';

export const routes: Routes = [
  {
    path: 'onboarding',
    canActivate: [redirectIfOnboardedGuard],
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'tabs',
    canActivate: [requireOnboardingGuard],
    loadComponent: () =>
      import('./tabs-navigation/tabs-navigation.page').then(
        (m) => m.TabsNavigationPage,
      ),
    children: [
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
        redirectTo: 'water',
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
