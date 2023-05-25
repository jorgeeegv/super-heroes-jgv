import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Hero from 'src/app/models/HeroVO';
import { SuperHeroesService } from 'src/app/services/share/super-heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent  implements OnInit {

  hero!: Hero;

  constructor(private route: ActivatedRoute,private SuperHeroesService: SuperHeroesService){
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => params.get('id') ? this.SuperHeroesService.getHero(params.get('id')) : null)
    this.SuperHeroesService.heroSelected$.subscribe(heroSelected => {
      if (heroSelected) this.hero = heroSelected;
    })
  }

}
