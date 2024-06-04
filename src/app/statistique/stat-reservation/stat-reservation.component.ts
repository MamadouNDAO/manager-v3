import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {ModelAlarme, ModelCardFlux, ModelListConnexion} from "../../Model/ModelData";
import {FixtureService} from "../../Model/fixture.service";

@Component({
  selector: 'app-stat-reservation',
  templateUrl: './stat-reservation.component.html',
  styleUrls: ['./stat-reservation.component.scss']
})
export class StatReservationComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() hauteurTab: string = "marg-t-20"
  @Input() activeFiltre: boolean = true;
  alarmes: ModelAlarme[] = []
  stats: ModelListConnexion[] = []
  alarmCard: ModelCardFlux[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  optionsGraph = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  }
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.stats = this.fixture.statReservation
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.alarmCard = this.fixture.cardNbReservation
  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChart()
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

  runChart() {
    const data = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [350, 250, 150, 50, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx = 'chart-badge';
    new this.Chart(ctx, {
      type: 'bar',
      data: data,
      options: this.optionsGraph
    });

    const data2 = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [50, 42, 68, 73, 25, 51, 80],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx2 = 'chart-acces';
    new this.Chart(ctx2, {
      type: 'bar',
      data: data2,
      options: this.optionsGraph
    });



  }
}
