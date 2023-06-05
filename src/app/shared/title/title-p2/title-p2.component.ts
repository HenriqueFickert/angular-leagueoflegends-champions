import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-p2',
  templateUrl: './title-p2.component.html',
  styleUrls: ['./title-p2.component.scss']
})
export class TitleP2Component {

  @Input()
  public title: string = '';

}
