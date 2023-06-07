import { Component, Input } from '@angular/core';
import { card } from 'src/app/models/card';
import { champion } from 'src/app/models/responses/champion';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public card: champion | undefined;

}
