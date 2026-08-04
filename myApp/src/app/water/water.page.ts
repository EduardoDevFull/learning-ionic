import { Component, computed, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, waterOutline } from 'ionicons/icons';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class WaterPage {
  goal = 8;
  cups = signal(0);

  percent = computed(() =>
    Math.min(100, Math.round((this.cups() / this.goal) * 100)),
  );

  constructor() {
    addIcons({ addOutline, removeOutline, waterOutline });
  }

  addCup() {
    if (this.cups() < this.goal) {
      this.cups.update((value) => value + 1);
    }
  }

  removeCup() {
    if (this.cups() > 0) {
      this.cups.update((value) => value - 1);
    }
  }
}
