import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Iron man');
  age = signal(30);

  heroDescription = computed(() => {
    const description = `Hero is ${this.name()} and is ${this.age()} years old`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  resetForm() {
    this.name.set('iRON masn');
    this.age.set(30);
  }
  changeHero() {
    this.name.set('Iron man');
    this.age.set(45);
  }
  getHeroDescription() {
    `Hero is ${this.name()} and is ${this.age()} years old`;
  }
  changeAge() {
    this.age.set(6);
  }
}
