import { roleChampionText } from './../../models/role-champion-text';
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

  public roleChampionText: roleChampionText = {
    title: 'Assassino',
    descriptions: ['O assassino no League of Legends é um personagem que se destaca pela sua habilidade em eliminar rapidamente seus adversários. Com uma combinação letal de velocidade, agilidade e dano explosivo, o assassino é capaz de causar um grande impacto no jogo.', 'Seu estilo de jogo é geralmente focado em emboscadas e flanqueamento, utilizando sua mobilidade para se aproximar do inimigo e causar dano em curto espaço de tempo. Com a habilidade de eliminar alvos prioritários, o assassino é uma escolha popular para jogadores que buscam dominar o mapa e criar pressão constante em seus adversários.']
  }


  public btnText: string = 'MOSTRAR MAIS';

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";

}
