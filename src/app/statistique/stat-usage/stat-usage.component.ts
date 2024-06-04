import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelAlarme, ModelCardAlarme, ModelStatComp, ModelStatUsage} from "../../Model/ModelData";
import {isWithinInterval, parse} from "date-fns";

declare var Chart: any;

@Component({
  selector: 'app-stat-usage',
  templateUrl: './stat-usage.component.html',
  styleUrls: ['./stat-usage.component.scss']
})
export class StatUsageComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() hauteurTab: string = "marg-t-20"
  alarmes: ModelAlarme[] = []
  stats: ModelStatUsage[] = []
  suggestionStat: ModelStatUsage[] = []
  alarmCard: ModelCardAlarme[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  isPopupdate: boolean = false
  popupDate: string = ''
  maxDate: Date = new Date()
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.stats = this.fixture.statsUsage
    this.suggestionStat = this.stats
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.alarmCard = this.fixture.cardUsage
  }

  ngAfterViewInit(): void {
    if(this.isGraphe) {
      this.runChart()
    }
  }

  closePopupDate(){
    this.isPopupdate = false
  }

  convertToDate(dateS: string){
    let dateString = "20/12/2023";
    return parse(dateString, "dd/MM/yyyy", new Date());
  }
  confirmeSelectDate(){
    this.isPopupdate = false

    this.suggestionStat = []
    let i = 0
    console.log(this.beforeday)
    this.stats.map(s => {
      let datef = s.date
      // console.log(datef)
      if(isWithinInterval(datef, { start: this.beforeday, end: this.today })){
        this.suggestionStat.push(s)
        i++
      }
    })

    console.log(i)
  }
  ouvrePopupDate(p: string){
    this.popupDate = p
    this.isPopupdate = true
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
        'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
      ],
      datasets: [{
        label: '',
        data: [250, 250, 150, 50, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx = 'chart-download';
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
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
    });

    const data2 = {
      labels: [
        'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
      ],
      datasets: [{
        label: '',
        data: [50, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx2 = 'chart-formulaire';
    new Chart(ctx2, {
      type: 'bar',
      data: data,
      options: {
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
    });

    const data3 = {
      labels: [
        'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
      ],
      datasets: [{
        label: '',
        data: [350, 400, 150, 350, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx3 = 'chart-connect';
    new Chart(ctx3, {
      type: 'bar',
      data: data,
      options: {
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
    });

    const data4 = {
      labels: [
        'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
      ],
      datasets: [{
        label: '',
        data: [150, 450, 150, 650, 250, 50, 40],
        backgroundColor: '#5A6B7C',
      }]
    };
    const ctx4 = 'chart-activation';
    new Chart(ctx4, {
      type: 'bar',
      data: data,
      options: {
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
