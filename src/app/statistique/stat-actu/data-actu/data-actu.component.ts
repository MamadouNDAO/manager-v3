import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {ModelCardFlux, ModelStatUsage} from "../../../Model/ModelData";
import {FixtureService} from "../../../Model/fixture.service";
import {BasePage} from "../../../../themis-theme/base";
declare var Chart: any;
@Component({
  selector: 'app-data-actu',
  templateUrl: './data-actu.component.html',
  styleUrls: ['./data-actu.component.scss']
})
export class DataActuComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() hauteurTab: string = "marg-t-20"
  @Input() stats: ModelStatUsage[] = []

  statsCard: ModelCardFlux[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChart()
    }
  }

  ngOnInit(): void {
    this.stats = this.fixture.statsActu
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.statsCard = this.fixture.cardActu
  }


  changeTabs(tab:string){
    switch (tab){
      case 'list':
        this.isListe = true
        this.isGraphe = false
        this.isCard = false
        break;
      case 'card':
        this.isListe = false
        this.isGraphe = false
        this.isCard = true
        break;
      case 'graphe':
        this.isListe = false
        this.isGraphe = true
        this.isCard = false
        setTimeout(() => {
          this.runChart()
        },500)
        break;

    }
  }

  changePage($event: number) {
    if(($event <= this.nombrePage) && ($event >= 1)) {
      this.p = $event
    }

  }

  selectItem(i: number) {
    this.stats.map((n) => {
      n.selected = false
    })
    i = (this.itemParPage * (this.p - 1)) + i
    this.stats[i].selected = true
  }

  runChart() {
    const ctx = 'chart_post';
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: '',
          data: [12, 19, 46, 20, 78, 50, 33, 21],
          borderWidth: 3,
          borderColor: '#ECB6C3',
          backgroundColor: '#43505F'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

    const ctx2 = 'chart_like';
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: '',
          data: [12, 19, 46, 20, 78, 50, 33, 21],
          borderWidth: 3,
          borderColor: '#ECB6C3',
          backgroundColor: '#43505F'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

    const ctx3 = 'chart_comment';
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: '',
          data: [12, 19, 46, 20, 78, 50, 33, 21],
          borderWidth: 3,
          borderColor: '#ECB6C3',
          backgroundColor: '#43505F'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

    const ctx4 = 'chart_partage';
    new Chart(ctx4, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: '',
          data: [12, 19, 46, 20, 78, 50, 33, 21],
          borderWidth: 3,
          borderColor: '#ECB6C3',
          backgroundColor: '#43505F'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });
  }



}
