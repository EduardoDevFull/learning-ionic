import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  barbellOutline,
  calendarOutline,
  chevronBackOutline,
  resizeOutline,
} from 'ionicons/icons';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonInput, FormsModule],
})
export class OnboardingPage {
  private readonly totalSteps = 3;

  step = signal(0);

  weightKg: number | null = null;
  heightCm: number | null = null;
  age: number | null = null;

  constructor(
    private profile: ProfileService,
    private router: Router,
  ) {
    addIcons({ barbellOutline, resizeOutline, calendarOutline, chevronBackOutline });
  }

  get isLastStep(): boolean {
    return this.step() === this.totalSteps - 1;
  }

  get canAdvance(): boolean {
    switch (this.step()) {
      case 0:
        return !!this.weightKg && this.weightKg > 0;
      case 1:
        return !!this.heightCm && this.heightCm > 0;
      case 2:
        return !!this.age && this.age > 0;
      default:
        return false;
    }
  }

  back() {
    if (this.step() > 0) {
      this.step.update((s) => s - 1);
    }
  }

  next() {
    if (!this.canAdvance) {
      return;
    }
    if (this.isLastStep) {
      this.finish();
    } else {
      this.step.update((s) => s + 1);
    }
  }

  private finish() {
    this.profile.saveProfile({
      weightKg: this.weightKg!,
      heightCm: this.heightCm!,
      age: this.age!,
    });
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }
}
