import {AfterViewInit, Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {ModelAlarme, ModelCardAlarme} from "../../Model/ModelData";
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import * as Highcharts from 'highcharts';

declare var require: any;
declare var Chart: any;

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.component.html',
  styleUrls: ['./alarme.component.scss']
})
export class AlarmeComponent extends BasePage implements OnInit, AfterViewInit {
  @ViewChild('chart-incendie') myChart: ElementRef | undefined;
  alarmes: ModelAlarme[] = []
  alarmCard: ModelCardAlarme[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  isAlert: boolean = false

  public options: any = {
    Chart: {
      type: 'line',
      height: 500,
      backgroundColor:'transparent'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Vend', 'Sam', 'dim'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    series: [{
      name: '',
      color: '#ECB6C3',
      data: [680, 650, 625, 680, 190, 140, 150],
      lineWidth: 2
    }, ]
  }

  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.alarmes = this.fixture.alarmes
    this.total = this.alarmes.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.alarmCard = this.fixture.cardAlarmes


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

  changeTabs(tab:string){
    switch (tab){
      case 'list':
          this.isListe = true
          this.isGraphe = false
          this.isCard = false
          this.isAlert = false
        break;
      case 'card':
          this.isListe = false
          this.isGraphe = false
          this.isCard = true
          this.isAlert = false
        break;
      case 'graphe':
          this.isListe = false
          this.isGraphe = true
          this.isCard = false
          this.isAlert = false
        setTimeout(() => {
          this.runChartIncendie()
        },500)
        break;
      case 'alerte' :
        this.isListe = false
        this.isGraphe = false
        this.isCard = false
        this.isAlert = true

    }

  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChartIncendie()
    }
  }

  runChartIncendie(){
        const ctx = 'chart-incendie';
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


        const ctx2 = 'chart-fuite';
        new Chart(ctx2, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
            datasets: [{
              label: '',
              data: [86, 143, 46, 30, 78, 50, 33, 65],
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



        const ctx3 = 'chart-intrusion';
        new Chart(ctx3, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
            datasets: [{
              label: '',
              data: [32, 79, 66, 10, 78, 7, 53],
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


        const ctx4 = 'chart-surcapacite';
        new Chart(ctx4, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            datasets: [{
              label: '',
              data: [12, 19, 46, 20, 78, 50, 33],
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
