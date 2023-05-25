import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/share/loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading: boolean = false;
  constructor(private LoaderService:LoaderService) {}

  ngOnInit() {
    this.LoaderService.loading$.subscribe( loading => {
      this.isLoading = loading;
    })
  }
}
