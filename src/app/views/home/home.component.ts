import { roleChampionImage } from 'src/app/models/role-champion-image';
import { Component } from '@angular/core';
import { card } from 'src/app/models/card';
import { title } from 'src/app/models/title';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public roleTitle: title = {
    top: 'TITLE TOP',
    bot: 'TITLE BOTTOM'
  };

  public card: card = {
    id: 'ahri',
    name: 'Ahri',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg '
  }

  public roleChampionImage: roleChampionImage = {
    background: './assets/img/role-icons/assassin-silver.png',
    image: './assets/img/renders/akali-render.png'
  }

  public btnText: string = 'MOSTRAR MAIS';

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";

}
