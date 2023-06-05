import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TitleComponent } from './title/title.component';
import { TitleP1Component } from './title/title-p1/title-p1.component';
import { TitleP2Component } from './title/title-p2/title-p2.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    BannerComponent,
    TitleComponent,
    TitleP1Component,
    TitleP2Component,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    TitleComponent,
    CardComponent
  ]
})
export class SharedModule { }
