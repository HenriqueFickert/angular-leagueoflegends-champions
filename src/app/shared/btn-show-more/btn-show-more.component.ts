import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-show-more',
  templateUrl: './btn-show-more.component.html',
  styleUrls: ['./btn-show-more.component.scss']
})
export class BtnShowMoreComponent {

  @Input() public btnText!: string;

}
