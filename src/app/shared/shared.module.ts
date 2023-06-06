import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TitleComponent } from './title/title.component';
import { TitleP1Component } from './title/title-p1/title-p1.component';
import { TitleP2Component } from './title/title-p2/title-p2.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    BannerComponent,
    TitleComponent,
    TitleP1Component,
    TitleP2Component,
    SubtitleComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    BannerComponent,
    TitleComponent,
    SubtitleComponent,
    CardComponent
  ]
})
export class SharedModule { }
