import { Component } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';

import { playCircle, waterOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'tabs-navigation',
  templateUrl: './tabs-navigation.page.html',
  styleUrls: ['./tabs-navigation.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  ],
})
export class TabsNavigationPage {
  constructor() {
    addIcons({ playCircle, waterOutline });
  }
}
