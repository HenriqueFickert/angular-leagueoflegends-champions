import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TitleComponent } from './title/title.component'
import { CardComponent } from './card/card.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { BtnShowMoreComponent } from './btn-show-more/btn-show-more.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChampionsFilterComponent } from './champions-filter/champions-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContentNotFoundComponent } from './content-not-found/content-not-found.component';

@NgModule({
  declarations: [
    BannerComponent,
    TitleComponent,
    SubtitleComponent,
    CardComponent,
    BtnShowMoreComponent,
    ChampionsFilterComponent,
    ContentNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BannerComponent,
    TitleComponent,
    SubtitleComponent,
    CardComponent,
    BtnShowMoreComponent,
    ChampionsFilterComponent,
    ContentNotFoundComponent
  ]
})
export class SharedModule { }
