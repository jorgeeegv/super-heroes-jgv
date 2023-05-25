import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loading);
  public loading$ = this._loading$.asObservable();

  constructor() { }


  setLoading(loadingState: boolean) {
    this.loading = loadingState;
    this._loading$.next(loadingState);
  }
}
