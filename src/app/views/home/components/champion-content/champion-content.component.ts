import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { champion } from 'src/app/models/responses/champion';
import { title } from 'src/app/models/title';
import { CardChampionsService } from 'src/app/services/card-champions.service';

enum roleEnums {
  TodasFuncoes = 'Todas as Funções',
  Assassino = 'Assassinos',
  Atirador = 'Atiradores',
  Mago = 'Magos',
  Tanque = 'Tanques',
  Suporte = 'Suportes',
}

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

  options: string[] = Object.values(roleEnums);;
  inicialRoleOptions: string = roleEnums.TodasFuncoes;
  inicialDificultyOptions: string = '';

  @Input() public inputText: string = '';

  roleTags: { [name: string]: string } = {
    Assassinos: "Assassin",
    Magos: "Mage",
    Lutadores: "Fighter",
    Tanques: "Tank",
    Atiradores: "Marksman",
    Suportes: "Support"
  };

  form!: FormGroup;


  constructor(private cardService: CardChampionsService, private formBuilder: FormBuilder) {
    this.urlImage = this.cardService.getImageUrl();
  }

  ngOnInit() {
    this.getAllCards();
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      searchText: [''],
      roleInput: [''],
      dificultyInput: ['']
    });

    this.form.valueChanges.subscribe((data: any) => {
      console.log(data);
    })
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

  onCancel(event: Event) {
    event.stopPropagation();
    this.inicialDificultyOptions = '';
  }

  applyFilters() {
    let loadedChampions: champion[] = [];
    console.log('role', this.inicialRoleOptions);
    console.log('text', this.inputText);
    loadedChampions = this.filterByRole(this.champions, this.inicialRoleOptions);
    loadedChampions = this.searchFilter(loadedChampions, this.inputText);

    console.log('loadedChampions', loadedChampions);
    this.displayedChampions = loadedChampions;
  }

  filterByRole(data: champion[], role: string) {
    if (this.roleTags.hasOwnProperty(role))
      return data.filter(objeto => objeto.tags.includes(this.roleTags[role]));
    else
      return data;
  }

  searchFilter(data: champion[], name: string) {
    return data.filter(objeto => objeto.name.toLowerCase().trim().includes(name.toLowerCase().trim()) || objeto.name.toLowerCase() == name);
  }
}