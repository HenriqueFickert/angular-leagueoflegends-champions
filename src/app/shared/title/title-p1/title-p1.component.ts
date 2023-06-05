import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-p1',
  templateUrl: './title-p1.component.html',
  styleUrls: ['./title-p1.component.scss']
})
export class TitleP1Component {


  @Input()
  public title: string = '';
}
