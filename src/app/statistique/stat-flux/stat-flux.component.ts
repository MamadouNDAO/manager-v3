import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelCardAlarme, ModelCardFlux, ModelStatFlux, ModelStatUsage} from "../../Model/ModelData";
declare var Chart: any;
@Component({
  selector: 'app-stat-flux',
  templateUrl: './stat-flux.component.html',
  styleUrls: ['./stat-flux.component.scss']
})
export class StatFluxComponent  extends BasePage implements OnInit, AfterViewInit  {
  @Input() hauteurTab: string = "marg-t-20"
  stats: ModelStatFlux[] = []
  suggestionStat: ModelStatFlux[] = []
  statsCard: ModelCardFlux[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  espace = ["Par espace", "Paris", "Bordeaux", "Lyon", "Caen"]
  salles = ["Salle 1", "Salle 2", "Salle 3", "Salle 4", "Salle 5"]
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChart()
    }
  }

  ngOnInit(): void {
    this.stats = this.fixture.statsFlux
    this.suggestionStat = this.stats
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.statsCard = this.fixture.cardFlux
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
          // Highcharts.chart('container-chart', this.options);
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
    const data = {
      labels: [
        'Par espace',
        'Par equipement',
      ],
      datasets: [{
        label: '',
        data: [100, 375],
        backgroundColor: [
          '#5A6B7C',
          '#ECB6C3'
        ],
        hoverOffset: 3
      }]
    };
    const ctx = 'chart-micro-localisation';
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

    const data2 = {
      labels: [
        'Par espace',
        'Par equipement',
      ],
      datasets: [{
        label: '',
        data: [100, 375],
        backgroundColor: [
          '#5A6B7C',
          '#ECB6C3'
        ],
        hoverOffset: 3
      }]
    };
    const ctx2 = 'chart-proximite';
    new Chart(ctx2, {
      type: 'doughnut',
      data: data2,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });


    const data3 = {
      labels: [
        'Par espace',
        'Par equipement',
      ],
      datasets: [{
        label: '',
        data: [100, 375],
        backgroundColor: [
          '#5A6B7C',
          '#ECB6C3'
        ],
        hoverOffset: 3
      }]
    };
    const ctx3 = 'chart-geofencing';
    new Chart(ctx3, {
      type: 'doughnut',
      data: data3,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

    const data4 = {
      labels: [
        "Par type d'usager",
        'Par entite',
        'Par salle',
        'Par Horaire'
      ],
      datasets: [{
        label: '',
        data: [75, 100, 150, 150],
        backgroundColor: [
          '#5A6B7C',
          '#ECB6C3',
          '#A5A5A5',
          '#000000',
        ],
        hoverOffset: 3
      }]
    };
    const ctx4 = 'chart-frequentation';
    new Chart(ctx4, {
      type: 'doughnut',
      data: data4,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

      }
    });

  }

  filtreSalle(metric: HTMLInputElement) {
    if(metric.value.toString().length > 2){
      this.suggestionStat = this.stats.filter(e =>
        e.metrique.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.suggestionStat = this.stats
    }
  }

}


