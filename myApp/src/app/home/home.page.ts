import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  leafOutline,
  moonOutline,
  musicalNotesOutline,
  waterOutline,
} from 'ionicons/icons';
import { QuickActionCardComponent } from '../components/quick-action-card/quick-action-card.component';

interface QuickAction {
  icon: string;
  label: string;
  color?: string;
  routerLink?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    QuickActionCardComponent,
  ],
})
export class HomePage {
  quickActions: QuickAction[] = [
    {
      icon: 'water-outline',
      label: 'Water',
      color: 'secondary',
      routerLink: '/tabs/water',
    },
    { icon: 'leaf-outline', label: 'Breathing', color: 'primary' },
    { icon: 'moon-outline', label: 'Meditation', color: 'tertiary' },
    { icon: 'musical-notes-outline', label: 'Sounds' },
  ];

  constructor() {
    addIcons({ waterOutline, leafOutline, moonOutline, musicalNotesOutline });
  }
}
