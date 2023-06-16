import { Component, Input } from '@angular/core';
import { champion } from 'src/app/models/responses/champion';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public card: champion | undefined;
  @Input() public urlImage: string = '';
  public isImageLoaded: boolean = false;

  roleTags: { [name: string]: string } = {
    Assassin: "../../../assets/img/role-tags/Assassin-White.png",
    Mage: "../../../assets/img/role-tags/Mage-White.png",
    Fighter: "../../../assets/img/role-tags/Fighter-White.png",
    Tank: "../../../assets/img/role-tags/Tank-White.png",
    Marksman: "../../../assets/img/role-tags/Marksman-White.png",
    Support: "../../../assets/img/role-tags/Support-White.png"
  };

  getPathByName(name: string): string {
    return this.roleTags[name];
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
