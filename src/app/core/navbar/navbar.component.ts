import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private homePageUrl: string;

  constructor(private clipboard: Clipboard) {
    this.homePageUrl = window.location.origin + '/home';
  }

  public copyText(): void {
    this.clipboard.copy(this.homePageUrl);
  }
}