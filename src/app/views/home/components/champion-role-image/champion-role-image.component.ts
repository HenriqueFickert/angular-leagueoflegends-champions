import { Component, Input } from '@angular/core';
import { roleChampionImage } from 'src/app/models/role-champion-image';

@Component({
  selector: 'app-champion-role-image',
  templateUrl: './champion-role-image.component.html',
  styleUrls: ['./champion-role-image.component.scss']
})
export class ChampionRoleImageComponent {
  @Input() public roleChampionImage: roleChampionImage | undefined;
}
