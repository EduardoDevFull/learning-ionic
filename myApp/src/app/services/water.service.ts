import { Injectable, computed, signal } from '@angular/core';

export interface WaterEntry {
  id: number;
  time: Date;
}

@Injectable({ providedIn: 'root' })
export class WaterService {
  goal = 8;

  private nextId = 1;
  entries = signal<WaterEntry[]>([]);

  cups = computed(() => this.entries().length);

  percent = computed(() =>
    Math.min(100, Math.round((this.cups() / this.goal) * 100)),
  );

  // Keeps the sea visible even at 0 cups, like the reference design.
  seaHeight = computed(() => Math.max(14, this.percent()));

  addCup() {
    if (this.cups() >= this.goal) {
      return;
    }
    this.entries.update((list) => [...list, { id: this.nextId++, time: new Date() }]);
  }

  removeCup(id: number) {
    this.entries.update((list) => list.filter((entry) => entry.id !== id));
  }
}
