import { Component, OnInit, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: 'dragonball-page.component.html',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 15000,
    },
    {
      id: 2,
      name: 'VEgeta',
      power: 9000,
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 8555,
    },
  ]);
}
