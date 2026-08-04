import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { library, playCircle, waterOutline, search } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { WaterPage } from '../water/water.page';

@Component({
  selector: 'tabs-navigation',
  templateUrl: './tabs-navigation.page.html',
  styleUrls: ['./tabs-navigation.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    WaterPage,
  ],
})
export class TabsNavigationPage implements OnInit {
  constructor() {
    addIcons({ library, playCircle, waterOutline, search });
  }

  ngOnInit() {}
}
