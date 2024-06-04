import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelAlarme, ModelCardAlarme, ModelCardEnv, ModelStatComp, ModelStatUsage} from "../../Model/ModelData";



@Component({
  selector: 'app-stat-environnement',
  templateUrl: './stat-environnement.component.html',
  styleUrls: ['./stat-environnement.component.scss']
})
export class StatEnvironnementComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() hauteurTab: string = "marg-t-20"
  suggestionStat: ModelStatUsage[] = []
  alarmes: ModelAlarme[] = []
  stats: ModelStatUsage[] = []
  alarmCard: ModelCardEnv[] = []
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
    this.stats = this.fixture.statsEnvironnement
    this.suggestionStat = this.stats
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.alarmCard = this.fixture.cardEnvironnement
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
    const ctx = 'chart-co';
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
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx2 = 'chart-temp';
    new this.Chart(ctx2, {
      type: 'bar',
      data: data2,
      options: this.optionsGraph
    });

    const data3 = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx3 = 'chart-humidite';
    new this.Chart(ctx3, {
      type: 'bar',
      data: data3,
      options: this.optionsGraph
    });

    const data4 = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx4 = 'chart-luminosite';
    new this.Chart(ctx4, {
      type: 'bar',
      data: data4,
      options: this.optionsGraph
    });

    const data5 = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx5 = 'chart-bruit';
    new this.Chart(ctx5, {
      type: 'bar',
      data: data5,
      options: this.optionsGraph
    });



    const data7 = {
      labels: [
        '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
      ],
      datasets: [{
        label: '',
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx7 = 'chart-presence';
    new this.Chart(ctx7, {
      type: 'bar',
      data: data7,
      options: this.optionsGraph
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
