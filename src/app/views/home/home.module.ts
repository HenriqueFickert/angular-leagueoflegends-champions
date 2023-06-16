import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChampionRoleImageComponent } from './components/champion-role-image/champion-role-image.component';
import { ChampionRoleTextComponent } from './components/champion-role-text/champion-role-text.component';
import { RoleContentComponent } from './components/role-content/role-content.component';
import { ChampionContentComponent } from './components/champion-content/champion-content.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeRoutingModule } from './home-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    ChampionRoleImageComponent,
    ChampionRoleTextComponent,
    RoleContentComponent,
    ChampionContentComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule
  ]
})
export class HomeModule { }
