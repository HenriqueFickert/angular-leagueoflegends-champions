import { Component, OnInit } from '@angular/core';
import { champion } from 'src/app/models/responses/champion';
import { data } from 'src/app/models/responses/data';
import { obj } from 'src/app/models/responses/obj';
import { title } from 'src/app/models/title';
import { CardChampionsService } from 'src/app/services/card-champions.service';

@Component({
  selector: 'app-champion-content',
  templateUrl: './champion-content.component.html',
  styleUrls: ['./champion-content.component.scss']
})
export class ChampionContentComponent implements OnInit {

  constructor(private cardService: CardChampionsService) { }

  public roleTitle: title = {
    top: 'ESCOLHA SEU',
    bot: 'CAMPEÃO'
  };

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";
  public btnText: string = 'MOSTRAR MAIS';

  cards: champion[] = [];

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAll<obj>('champion.json').subscribe({
      next: (data: obj) => {

        const response: data = data.data;

        for (const championName in response) {
          if (response.hasOwnProperty(championName)) {
            const champion: champion = response[championName];
            this.cards.push(champion);
          }
        }



      },
      error: (error) => console.error(error)
    });
  }

}


  // public card: card = {
  //   id: 'ahri',
  //   name: 'Ahri',
  //   image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg '
  // }