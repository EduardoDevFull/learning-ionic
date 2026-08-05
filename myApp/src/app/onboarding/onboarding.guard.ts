import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

export const requireOnboardingGuard: CanActivateFn = () => {
  const profile = inject(ProfileService);
  return profile.onboarded() ? true : inject(Router).parseUrl('/onboarding');
};

export const redirectIfOnboardedGuard: CanActivateFn = () => {
  const profile = inject(ProfileService);
  return profile.onboarded() ? inject(Router).parseUrl('/tabs') : true;
};
