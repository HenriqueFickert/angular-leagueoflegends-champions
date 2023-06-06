import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public roleTitle: any = {
    top: 'TITLE TOP',
    bot: 'TITLE BOTTOM'
  };

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";

}
