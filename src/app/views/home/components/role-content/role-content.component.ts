import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { role } from 'src/app/models/role';
import { title } from 'src/app/models/title';


@Component({
  selector: 'app-role-content',
  templateUrl: './role-content.component.html',
  styleUrls: ['./role-content.component.scss']
})
export class RoleContentComponent implements OnInit {
  public roleTitle: title = {
    top: 'ESCOLHA SEU',
    bot: 'ESTILO'
  };

  public roleSubtitle: string = "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.";

  public listRoleChampions: role[] = [
    {
      roleImage: {
        background: "./assets/img/role-icons/assassin-silver.png",
        image: "./assets/img/renders/akali-render.png"
      },
      roleText: {
        title: "Assassino",
        descriptions: ['O assassino no League of Legends é um personagem que se destaca pela sua habilidade em eliminar rapidamente seus adversários. Com uma combinação letal de velocidade, agilidade e dano explosivo, o assassino é capaz de causar um grande impacto no jogo.', 'Seu estilo de jogo é geralmente focado em emboscadas e flanqueamento, utilizando sua mobilidade para se aproximar do inimigo e causar dano em curto espaço de tempo. Com a habilidade de eliminar alvos prioritários, o assassino é uma escolha popular para jogadores que buscam dominar o mapa e criar pressão constante em seus adversários.']
      }
    },
    {
      roleImage: {
        background: "./assets/img/role-icons/adc-silver.png",
        image: "./assets/img/renders/xayah-render.png"
      },
      roleText: {
        title: "Atiradores",
        descriptions: ['Os atiradores no League of Legends são personagens especializados em causar dano físico à distância. Com ataques básicos rápidos e habilidades que aumentam seu dano e velocidade de ataque, os atiradores podem causar grande impacto no jogo.', 'Seu estilo de jogo é geralmente focado em posição e posicionamento, mantendo uma distância segura de seus adversários enquanto infligem dano constante em seus alvos. Com habilidades que podem aumentar sua mobilidade e causar dano em área, os atiradores são escolhas populares para jogadores que buscam controlar o mapa e garantir a vantagem em batalhas prolongadas.']
      }
    },
    {
      roleImage: {
        background: "./assets/img/role-icons/fighter-silver.png",
        image: "./assets/img/renders/camille-render.png"
      },
      roleText: {
        title: "Lutadores",
        descriptions: ['Os lutadores no League of Legends são personagens versáteis que possuem um equilíbrio entre resistência e dano. Com uma combinação de habilidades ofensivas e defensivas, os lutadores podem enfrentar vários inimigos ao mesmo tempo, enquanto causam dano significativo.', 'Seu estilo de jogo é geralmente focado em combate de curta distância, utilizando sua força física para dominar os adversários e causar impacto nas lutas em equipe. Com habilidades que podem aumentar sua resistência e regeneração, os lutadores são escolhas populares para jogadores que buscam dominar a linha de frente e garantir a vantagem em batalhas prolongadas.']
      }
    },
    {
      roleImage: {
        background: "./assets/img/role-icons/mage-silver.png",
        image: "./assets/img/renders/ahri-render.png"
      },
      roleText: {
        title: "Magos",
        descriptions: ['Os magos no League of Legends são personagens especializados em causar dano mágico à distância. Com habilidades que infligem dano em área e possuem efeitos diversos, os magos podem causar grande impacto no jogo mesmo sem entrar em combate direto.', 'Seu estilo de jogo é geralmente focado em posição e estratégia, utilizando seu alcance para controlar o mapa e infligir dano constante em seus adversários. Com habilidades que podem atordoar, silenciar ou enraizar seus alvos, os magos são escolhas populares para jogadores que buscam causar desordem na equipe inimiga e garantir a vitória através do controle de objetivos.']
      }
    },
    {
      roleImage: {
        background: "./assets/img/role-icons/support-silver.png",
        image: "./assets/img/renders/lulu-render.png"
      },
      roleText: {
        title: "Suporte",
        descriptions: ['Os suportes no League of Legends são personagens especializados em fornecer auxílio e proteção a seus aliados. Com habilidades que podem curar, conceder escudos e controlar a equipe inimiga, os suportes são fundamentais para garantir a sobrevivência e o sucesso de seus aliados.', 'Seu estilo de jogo é geralmente focado em posição e estratégia, utilizando suas habilidades de suporte para garantir a vantagem em lutas em equipe e controlar objetivos. Com habilidades que podem atordoar, silenciar ou enraizar seus adversários, os suportes são escolhas populares para jogadores que buscam garantir a vantagem da equipe e proteger seus aliados.']
      }
    },
    {
      roleImage: {
        background: "./assets/img/role-icons/tank-silver.png",
        image: "./assets/img/renders/garen-render.png"
      },
      roleText: {
        title: "Tanques",
        descriptions: ['Os tanques no League of Legends são personagens especializados em resistência e controle de grupo. Com habilidades que aumentam sua durabilidade e aguentam o dano inimigo, os tanques são essenciais para proteger seus aliados e dominar a linha de frente.', 'Seu estilo de jogo é geralmente focado em posição e controle, utilizando suas habilidades para interromper a equipe inimiga e garantir a vantagem em lutas em equipe. Com habilidades que podem atordoar, empurrar ou enraizar seus adversários, os tanques são escolhas populares para jogadores que buscam garantir a sobrevivência de seus aliados e dominar o campo de batalha.']
      }
    }
  ];

  public selectedTabIndex: number = 0;
  @ViewChild(MatTabGroup) private tabGroup: MatTabGroup | undefined;
  private tabTimer: number = 5000;
  private intervalId: any;

  ngOnInit() {
    this.inicializeInterval();
  }

  private inicializeInterval() {
    this.intervalId = setInterval(() => {
      this.automaticChangeTab();
    }, this.tabTimer);
  }

  private changeTimerInverval(newTimerValue: number) {
    clearInterval(this.intervalId);
    this.tabTimer = newTimerValue;
    this.inicializeInterval();
  }

  automaticChangeTab() {
    const tabLength = this.tabGroup?._tabs.length || 0;
    this.selectedTabIndex++;
    this.changeTimerInverval(5000);

    if (this.selectedTabIndex >= tabLength)
      this.selectedTabIndex = 0;
  }

  onTabSelected(event: any) {
    if (event !== this.selectedTabIndex)
      this.changeTimerInverval(10000);

    this.selectedTabIndex = event;
  }
}
