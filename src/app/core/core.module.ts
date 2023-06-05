import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatternFooterComponent } from './footer/pattern-footer/pattern-footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { RiotLogoComponent } from './navbar/riot-logo/riot-logo.component';
import { LeagueoflegendsLogoComponent } from './navbar/leagueoflegends-logo/leagueoflegends-logo.component';
import { NavbarButtonComponent } from './navbar/navbar-button/navbar-button.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PatternFooterComponent,
    SocialMediaComponent,
    RiotLogoComponent,
    LeagueoflegendsLogoComponent,
    NavbarButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
