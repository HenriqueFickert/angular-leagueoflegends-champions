import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  changeRoute(): void {
    console.log(this.router.url);
    if (this.router.url !== 'home') {
      this.router.navigateByUrl('home').then(() => {
        this.scrollToSection('#campeoes');
      });
    } else {
      this.scrollToSection('#campeoes');
    }
  }

  scrollToSection(sectionId: string) {
    const section = document.querySelector(sectionId);
    if (section)
      section.scrollIntoView({ behavior: 'smooth' });
  }
}
