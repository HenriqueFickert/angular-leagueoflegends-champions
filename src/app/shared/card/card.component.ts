import { Component, Input } from '@angular/core';
import { RoleTagHelper } from 'src/app/helpers/roleTagHelper';
import { champion } from 'src/app/models/responses/champion';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public card!: champion;
  @Input() public urlImage!: string;
  public isImageLoaded: boolean = false;
  private roleTagHelper: RoleTagHelper = new RoleTagHelper();

  getPathByName(name: string): string {
    return this.roleTagHelper.getRoleTagUrl(name);
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
