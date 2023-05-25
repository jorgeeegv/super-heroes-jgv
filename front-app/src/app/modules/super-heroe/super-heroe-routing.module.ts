import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent 
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperHeroeRoutingModule { }
