import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import Hero from 'src/app/models/HeroVO';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesResourceService {
  private URL = 'http://localhost:3000/heroes'

  constructor(private http: HttpClient) { }

  getHeroes(filters?: any) {
    let params = new HttpParams();

    if(filters) Object.keys(filters).forEach( paramKey => { params = params.append(paramKey,filters[paramKey])})
    else { params = params.append('_limit',3) }
    return firstValueFrom(this.http.get<Hero[]>(this.URL, { params}))
  }

  getHero(id: number){
    return firstValueFrom(this.http.get<Hero>(`http://localhost:3000/heroes/${id}`))
  }

  addHero(hero: Hero) {
    return firstValueFrom(this.http.post<Hero>('http://localhost:3000/heroes', hero))
  }

  updateHero(hero: Hero) {
    return firstValueFrom(this.http.put<Hero>(`http://localhost:3000/heroes/${hero.id}`, hero))
  }
  deleteHero(hero: Hero) {
    return firstValueFrom(this.http.delete<Hero>(`http://localhost:3000/heroes/${hero.id}`))
  }

}
