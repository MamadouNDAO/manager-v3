import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../themis-theme/base";
import {FixtureService} from "../Model/fixture.service";
import * as Highcharts from "highcharts";
import {ModelAlarme, ModelCardAlarme, ModelStatComp} from "../Model/ModelData";
declare var Chart: any;

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() hauteurTab: string = "marg-t-20"
  alarmes: ModelAlarme[] = []
  stats: ModelStatComp[] = []
  alarmCard: ModelCardAlarme[] = []
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

  ngOnInit(): void {
    this.stats = this.fixture.statCompactes
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.alarmCard = this.fixture.cardAlarmes2
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
    this.alarmes.map((n) => {
      n.selected = false
    })
    i = (this.itemParPage * (this.p - 1)) + i
    this.alarmes[i].selected = true
  }

  runChart(){
    const data = {
      labels: [
        'Par salle',
        'Par type de salle',
        'Par etage'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [50, 250, 150],
        backgroundColor: [
          '#A5A5A5',
          '#ECB6C3',

          '#5A6B7C',
        ],
        hoverOffset: 4
      }]
    };
    const ctx = 'chart-reserv';
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

    const ctx2 ='chart-notif'
    const data2 = {
      labels: [
        'Réservation',
        'Incidents',
        'Restauration',
        'Meteo',
        'Transport'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [75, 150, 100, 100],
        backgroundColor: [
          '#A5A5A5',
          '#ECB6C3',
          '#6C6C6C',
          '#000000',
          '#5A6B7C',
        ],
        hoverOffset: 4
      }]
    };
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

    const ctx3 ='chart-abonne'
    const data3 = {
      labels: [
        'Réservation',
        'Incidents',
        'Restauration',
        'Meteo',
        'Transport'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [80, 120, 160, 100],
        backgroundColor: [
          '#A5A5A5',
          '#ECB6C3',
          '#6C6C6C',
          '#000000',
          '#5A6B7C',
        ],
        hoverOffset: 4
      }]
    };
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
  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChart()
    }
  }

}
