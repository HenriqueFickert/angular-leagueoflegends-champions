import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  public isLoaded: boolean = false;

  onLoaded() {
    this.isLoaded = true;
  }
}
