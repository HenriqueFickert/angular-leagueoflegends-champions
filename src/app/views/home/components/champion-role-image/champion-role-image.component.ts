import { Component, Input } from '@angular/core';
import { roleChampionImage } from 'src/app/models/role';

@Component({
  selector: 'app-champion-role-image',
  templateUrl: './champion-role-image.component.html',
  styleUrls: ['./champion-role-image.component.scss']
})
export class ChampionRoleImageComponent {
  @Input() public roleChampionImage: roleChampionImage | undefined;

  public isLoadedBg: boolean = false;
  public isLoadedImage: boolean = false;

  onLoadedBg() {
    this.isLoadedBg = true;
  }

  onLoadedImage() {
    this.isLoadedImage = true;
  }
}
