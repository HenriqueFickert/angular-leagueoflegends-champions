import { roleChampionText } from './../../../../models/role-champion-text';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champion-role-text',
  templateUrl: './champion-role-text.component.html',
  styleUrls: ['./champion-role-text.component.scss']
})
export class ChampionRoleTextComponent {
  @Input() public roleChampionText: roleChampionText | undefined;
}
