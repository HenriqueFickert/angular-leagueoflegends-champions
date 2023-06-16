import { Component, OnInit } from '@angular/core';
import { champion } from 'src/app/models/responses/champion';
import { title } from 'src/app/models/title';
import { CardChampionsService } from 'src/app/services/card-champions.service';

@Component({
  selector: 'app-champion-content',
  templateUrl: './champion-content.component.html',
  styleUrls: ['./champion-content.component.scss']
})
export class ChampionContentComponent implements OnInit {

  public roleTitle: title = {
    top: 'ESCOLHA SEU',
    bot: 'CAMPEÃO'
  };

  public roleSubtitle: string = "Com 6 estilos únicos de jogo, cada um com sua estratégia e papel específico, você descobrirá o campeão perfeito para sua preferência no League of Legends.";
  public btnText: string = 'MOSTRAR MAIS';

  public urlImage: string = '';
  public showButton: boolean = true;
  public displayedChampions: champion[] = [];
  private champions: champion[] = [];
  private currentPage: number = 1;
  private pageSize: number = 16;

  public loadedContent: boolean = false;

  constructor(private cardService: CardChampionsService) {
    this.urlImage = this.cardService.getImageUrl();
  }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getChampions('champion.json').subscribe({
      next: (data: champion[]) => {
        this.champions = data;
        this.displayedChampions = this.getCurrentPage();
        this.loadedContent = true;
        console.log(data);
      },
      error: (error) => console.error(error)
    });
  }

  getCurrentPage(): champion[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.champions.slice(startIndex, endIndex);
  }

  showMoreButton() {
    const totalPages = Math.ceil(this.champions.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.displayedChampions.push(...this.getCurrentPage());

      if (this.currentPage == totalPages)
        this.showButton = false;
    }
  }
}