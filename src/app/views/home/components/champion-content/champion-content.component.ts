import { Component } from '@angular/core';
import { card } from 'src/app/models/card';
import { title } from 'src/app/models/title';

@Component({
  selector: 'app-champion-content',
  templateUrl: './champion-content.component.html',
  styleUrls: ['./champion-content.component.scss']
})
export class ChampionContentComponent {
  public roleTitle: title = {
    top: 'ESCOLHA SEU',
    bot: 'CAMPEÃO'
  };

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";

  public card: card = {
    id: 'ahri',
    name: 'Ahri',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg '
  }

  public btnText: string = 'MOSTRAR MAIS';
}
