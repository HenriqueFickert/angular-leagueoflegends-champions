import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChampionRoleImageOverviewComponent } from './components/champion-role-image-overview/champion-role-image-overview.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChampionRoleImageOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
