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
      label: 'Água',
      color: 'secondary',
    },
    { icon: 'leaf-outline', label: 'Respiração', color: 'primary' },
    { icon: 'moon-outline', label: 'Meditação', color: 'tertiary' },
    { icon: 'musical-notes-outline', label: 'Sons' },
  ];

  constructor() {
    addIcons({ waterOutline, leafOutline, moonOutline, musicalNotesOutline });
  }
}
