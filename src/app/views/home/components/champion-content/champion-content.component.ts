import { Component, OnInit } from '@angular/core';
import { champion } from 'src/app/models/responses/champion';
import { championObject, data } from 'src/app/models/responses/champion-object';
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

  public roleSubtitle: string = "Com 6 estilos únicos de jogo, cada um com sua estratégia e papel específico, você descobrirá o campeão perfeito para sua preferência no League of Legends.";
  public btnText: string = 'MOSTRAR MAIS';

  champions: champion[] = [];
  urlImage: string = '';

  ngOnInit() {
    this.getAllCards();
    this.urlImage = this.cardService.getImageUrl();
  }

  getAllCards() {
    this.cardService.getChampions('champion.json').subscribe({
      next: (data: champion[]) => {
        this.champions = data;
      },
      error: (error) => console.error(error)
    });
  }
}