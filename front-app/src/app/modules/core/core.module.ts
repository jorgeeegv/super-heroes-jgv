import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { SharedModuleModule } from '../shared/shared-module.module';
import { LoaderInterceptor } from 'src/app/interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class CoreModule { }
