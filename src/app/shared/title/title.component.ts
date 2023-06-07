import { Component, Input } from '@angular/core';
import { title } from 'src/app/models/title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() public title: title | undefined;

}
