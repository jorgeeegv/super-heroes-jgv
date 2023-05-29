import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import Hero from '../../models/HeroVO';
import { SuperHeroesResourceService } from '../resources/super-heroes.resource';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  // Redux state?
  private heroList: Hero[] = [];
  private _heroList$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.heroList);
  public heroList$ = this._heroList$.asObservable();

  private heroSelected: Hero = new Hero({});
  private _heroSelected$: BehaviorSubject<Hero> = new BehaviorSubject<Hero>(this.heroSelected);
  public heroSelected$ = this._heroSelected$.asObservable();

  constructor(private SuperHeroesResourceService: SuperHeroesResourceService) { }

  public getHeroList(filters?: any) {
    this.SuperHeroesResourceService.getHeroes(filters).then((response: Hero[]) => {
      this.heroList = response;
      this._heroList$.next(this.heroList);
    })
  }
  public async addHero(hero: Hero) {
    this.SuperHeroesResourceService.addHero(hero).then(() => this.getHeroList())
  }

  public async saveHero(hero: Hero) {
    return this.SuperHeroesResourceService.updateHero(hero).then(() => this.getHeroList())
  }
  public async deleteHero(hero: Hero) {
    return this.SuperHeroesResourceService.deleteHero(hero).then(() => this.getHeroList())
  }

  public async getHero(id: any) {
    this.SuperHeroesResourceService.getHero(id).then((hero: Hero) => {
      this.heroSelected = hero;
      this._heroSelected$.next(this.heroSelected);
    })
  }

}
