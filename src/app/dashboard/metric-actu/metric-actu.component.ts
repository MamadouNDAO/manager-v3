import {Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelCardFlux, ModelStatUsage} from "../../Model/ModelData";
declare var Chart: any;
@Component({
  selector: 'app-metric-actu',
  templateUrl: './metric-actu.component.html',
  styleUrls: ['./metric-actu.component.scss']
})
export class MetricActuComponent extends BasePage implements OnInit  {
  @Input() hauteurTab: string = "marg-t-20"
  @Input() stats: ModelStatUsage[] = []

  suggessionStats: ModelStatUsage[] = []
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
    //this.stats = this.fixture.metricNbPost
    this.suggessionStats = this.stats
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.statsCard = this.fixture.cardNbPost
  }

  filtreSalle(name: HTMLInputElement){
    if(name.value.toString().length > 2){
      this.suggessionStats = this.stats.filter(e =>
        e.metrique.toLowerCase().includes(name.value.toString().toLowerCase())
      );
    }
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
        labels: ['30 nov', '29 nov', '28 nov', '27 nov', '26 nov', '25 nov', '24 nov', '23 nov', '22 nov'].sort(),
        datasets: [
            {

                label: 'Yammers',
                data: [42, 36, 3, 5, 25, 18, 12, 7, 10],
                borderWidth: 3,
                borderColor: '#43505F',
                backgroundColor: '#43505F'
              },
              {
                label: 'Hygiene et proprete',
                data: [12, 46, 15, 15, 45, 8, 22, 7, 13],
                borderWidth: 3,
                borderColor: '#ECB6C3',
                backgroundColor: '#ECB6C3'
              },
              {
                label: 'Securite',
                data: [16, 40, 15, 17, 15, 28, 19, 17, 23],
                borderWidth: 3,
                borderColor: '#A5A5A5',
                backgroundColor: '#A5A5A5'
              }
        ]
      },
      options: {

        plugins: {
          legend: {
            display: true
          }
        },
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
