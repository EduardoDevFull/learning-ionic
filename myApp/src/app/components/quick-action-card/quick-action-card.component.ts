import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'quick-action-card',
  standalone: true,
  templateUrl: './quick-action-card.component.html',
  styleUrls: ['./quick-action-card.component.scss'],
  imports: [IonCard, IonCardContent, IonIcon, RouterLink],
})
export class QuickActionCardComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() color?: string;
  @Input() routerLink?: string | any[];
}
