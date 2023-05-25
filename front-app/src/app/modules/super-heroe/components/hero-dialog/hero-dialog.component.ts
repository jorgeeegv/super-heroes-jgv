import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Hero from 'src/app/models/HeroVO';
import { SuperHeroesService } from 'src/app/services/share/super-heroes.service';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDialogComponent {

  hero: Hero = new Hero({});
  heroForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { hero: Hero }, private SuperHeroesService: SuperHeroesService) {
    if (data && data.hero) this.hero = data.hero;
  }


  saveHero() {
    debugger
    if (this.hero.id) this.SuperHeroesService.saveHero(this.hero);
    else this.SuperHeroesService.addHero(this.hero)
  }

}
