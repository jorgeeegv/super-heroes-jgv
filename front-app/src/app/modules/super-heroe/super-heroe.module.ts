import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroeRoutingModule } from './super-heroe-routing.module';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { SharedModuleModule } from '../shared/shared-module.module';
import { SuperHeroesService } from 'src/app/services/share/super-heroes.service';
import { HeroDialogComponent } from './components/hero-dialog/hero-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroDialogComponent
  ],
  imports: [
    CommonModule,
    SuperHeroeRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  providers: [
    SuperHeroesService
  ]
})
export class SuperHeroeModule { }
