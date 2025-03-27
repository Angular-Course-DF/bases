import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: 'dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 15000,
    },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    console.log(`${this.name()} - ${this.power()}`);
    const newCharacter: Character = {
      id: this.addCharacter.length + 1,
      name: this.name(),
      power: this.power(),
    };
    // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
