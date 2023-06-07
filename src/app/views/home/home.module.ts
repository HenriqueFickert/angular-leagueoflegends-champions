import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChampionRoleImageComponent } from './components/champion-role-image/champion-role-image.component';
import { ChampionRoleTextComponent } from './components/champion-role-text/champion-role-text.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChampionRoleImageComponent,
    ChampionRoleTextComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
