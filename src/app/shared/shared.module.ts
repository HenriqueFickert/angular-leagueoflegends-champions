import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TitleComponent } from './title/title.component'
import { CardComponent } from './card/card.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { BtnShowMoreComponent } from './btn-show-more/btn-show-more.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BannerComponent,
    TitleComponent,
    SubtitleComponent,
    CardComponent,
    BtnShowMoreComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    BannerComponent,
    TitleComponent,
    SubtitleComponent,
    CardComponent,
    BtnShowMoreComponent
  ]
})
export class SharedModule { }
