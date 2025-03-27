import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('Gohan');
  power = signal(200);

  newCharacter = output<Character>();
  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    const newCharacterItem: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacterItem);
    console.log(newCharacterItem);

    // this.characters().push(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
