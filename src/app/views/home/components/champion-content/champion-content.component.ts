import { Component, OnInit } from '@angular/core';
import { DificultyHelper } from 'src/app/helpers/dificultyHelper';
import { RoleTagHelper } from 'src/app/helpers/roleTagHelper';
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

  public urlImage!: string;
  public showButton: boolean = true;
  public displayedChampions!: champion[];
  public filteredChampions!: champion[];
  private champions!: champion[];
  private currentPage: number = 1;
  private pageSize: number = 16;
  private totalPages!: number;
  public loadedContent: boolean = false;

  private roleTagHelper: RoleTagHelper = new RoleTagHelper();
  private dificultyHelper: DificultyHelper = new DificultyHelper();

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
        this.filteredChampions = data;
        this.totalPages = Math.ceil(this.filteredChampions.length / this.pageSize);
        this.displayedChampions = this.getCurrentPage();
        this.loadedContent = true;
      },
      error: (error) => console.error(error)
    });
  }

  getCurrentPage(): champion[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    if (this.currentPage == this.totalPages || this.totalPages == 0)
      this.showButton = false;
    else
      this.showButton = true;

    return this.filteredChampions.slice(startIndex, endIndex);
  }

  showMoreButton() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.displayedChampions.push(...this.getCurrentPage());
    }
  }

  applyFilters(text: string, role: string, dificulty: string) {
    this.currentPage = 1;
    this.filteredChampions = (this.champions || []).filter(objeto =>
      this.searchFilter(objeto, text) &&
      this.roleFilter(objeto, role) &&
      this.dificultyFilter(objeto, dificulty)
    );

    this.totalPages = Math.ceil(this.filteredChampions.length / this.pageSize);
  }

  private searchFilter(obj: champion, name: string): boolean {
    if (name === '')
      return true;

    const lowerCaseName = name.toLowerCase().trim();
    return (
      obj.name.toLowerCase().trim().includes(lowerCaseName) ||
      obj.name.toLowerCase() === lowerCaseName
    );
  }

  private roleFilter(obj: champion, role: string): boolean {
    const roleValue = this.roleTagHelper.getRoleTag(role);
    if (roleValue === '')
      return true;

    return obj.tags.includes(roleValue);
  }

  private dificultyFilter(obj: champion, dificulty: string): boolean {
    if (dificulty === '')
      return true;

    const dificultyNumber = parseInt(dificulty, 10);
    return this.dificultyHelper.getDificultyData(obj.info.difficulty) === dificultyNumber;
  }

  getFilterData(event: any) {
    this.applyFilters(event.searchText, event.roleInput, event.dificultyInput);
    this.displayedChampions = this.getCurrentPage();
  }
}