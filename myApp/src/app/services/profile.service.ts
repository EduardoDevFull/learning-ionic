import { Injectable, computed, signal } from '@angular/core';

export interface UserProfile {
  weightKg: number;
  heightCm: number;
  age: number;
}

const STORAGE_KEY = 'water-app-profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile = signal<UserProfile | null>(this.readFromStorage());

  onboarded = computed(() => this.profile() !== null);

  // Falls back to 8 cups (the app's original default) until onboarding is completed.
  dailyGoalCups = computed(() => {
    const profile = this.profile();
    return profile ? this.calculateGoalCups(profile) : 8;
  });

  saveProfile(profile: UserProfile) {
    this.profile.set(profile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }

  private readFromStorage(): UserProfile | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UserProfile) : null;
  }

  // Rough estimate: ~35ml per kg of body weight, nudged by height (larger
  // frames need a bit more) and age (metabolic/activity needs taper off).
  private calculateGoalCups({ weightKg, heightCm, age }: UserProfile): number {
    let ml = weightKg * 35;
    ml += (heightCm - 160) * 2;
    if (age > 55) {
      ml -= 300;
    } else if (age < 18) {
      ml -= 200;
    }

    const cups = Math.round(ml / 240);
    return Math.min(15, Math.max(4, cups));
  }
}
