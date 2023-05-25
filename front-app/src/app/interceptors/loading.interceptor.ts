import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/share/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {


  constructor(private LoaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoaderService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        // Timeout to see loading
        setTimeout(() => {
          this.LoaderService.setLoading(false)
        }, 1000);
      }),
    );
  }

}
