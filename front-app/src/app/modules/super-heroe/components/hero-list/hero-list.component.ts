import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Hero from 'src/app/models/HeroVO';
import { SuperHeroesService } from 'src/app/services/share/super-heroes.service';
import { HeroDialogComponent } from '../hero-dialog/hero-dialog.component';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroSearchText!: string;
  heroSearchTextSubject = new Subject<string>();

  @ViewChild('deleteHeroAlert', { static: true }) deleteHeroAlert!: TemplateRef<any>;

  heroes: Hero[] = [];
  filters: any = {
    _page: 1,
    _limit: 3
  };
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.filters = Object.assign(this.filters,{
      _page: e.pageIndex
    })
    this.SuperHeroesService.getHeroList(this.filters);
  }
  constructor(private SuperHeroesService: SuperHeroesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.SuperHeroesService.getHeroList(this.filters);
    this.SuperHeroesService.heroList$.subscribe(heroesListResponse => {
      if (heroesListResponse) this.heroes = heroesListResponse;
    })

    // Search heroes
    this.heroSearchTextSubject.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.filters = Object.assign(this.filters,{
          _page: 0,
          name_like: value
        })
        this.SuperHeroesService.getHeroList(this.filters);
      });
  }

  createOrUpdate(hero?: Hero) {
    let heroToEdit = Object.assign({},hero);
    this.dialog.open(HeroDialogComponent, {
      data: { hero: heroToEdit },
      width: '40rem',
      height: 'auto'
    });
  }

  showDeleteModal(hero: Hero) {
    let dialog = this.dialog.open(this.deleteHeroAlert, { data: hero });
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) this.SuperHeroesService.deleteHero(hero).then(()=> this.SuperHeroesService.getHeroList(this.filters))
    });
  }

}
