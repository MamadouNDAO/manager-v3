import {Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelCardFlux, ModelDescriptif, ModelEntete, ModelListConnexion, ModelStatUsage} from "../../Model/ModelData";
import {flush} from "@angular/core/testing";
import {Sort} from "@angular/material/sort";
declare var Chart: any;
@Component({
  selector: 'app-squelette',
  templateUrl: './squelette.component.html',
  styleUrls: ['./squelette.component.scss']
})
export class SqueletteComponent extends BasePage implements OnInit {
  @Input() enteteTable: ModelEntete[] = []
  @Input() enteteTableSeuil: ModelEntete[] = []
  @Input() dataTable: ModelStatUsage[] = []
  @Input() unite: string = ''
  @Input() dataCard: ModelCardFlux[] = []
  @Input() hauteurTab: string = "marg-t-150"
  @Input() typeGraph: string = 'line'
  @Input() labelsGraph: string[] = ['05 dec', '04 dec', '05 dec','06 dec','08 dec','09 dec','10 dec','11 dec', '12 dec' ]
  @Input() datasGraph: any[] = []
  @Input() titreGraph:string = "Nombre de connexions via le module dauthentification par jour"
  @Input() displayLabel: boolean = false
  @Input() seuilValue!: number
  @Input() alert: boolean = true

  descriptifStat: string = ''
  descriptifStats: ModelDescriptif[] = []
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  isAlerte: boolean = false
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isDesc: boolean = false
  sort: Sort = {
    active: '',
    direction: ''
  };
  optionsGraph = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: this.displayLabel
      }
    },

  }
  sortedData: ModelStatUsage[] = []
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.total = this.dataTable.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
    this.descriptifStats = this.fixture.descriptifStats
    this.sortedData = this.dataTable
    this.optionsGraph = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: this.displayLabel
        }
      },

    }
  }

  checkSeuil(metric: number | string){
    var nombre = metric
    if (typeof metric !== "number") {
      nombre = parseFloat(metric.replace(/[^0-9.]/g, ''));
    }

    return nombre > this.seuilValue
  }

  changeTabs(tab:string){
    switch (tab){
      case 'alert':
        this.isAlerte = true
        this.isListe = false
        this.isGraphe = false
        this.isCard = false
        break;
      case 'list':
        this.isListe = true
        this.isGraphe = false
        this.isCard = false
        this.isAlerte = false
        break;
      case 'card':
        this.isListe = false
        this.isGraphe = false
        this.isCard = true
        this.isAlerte = false
        break;
      case 'graphe':
        this.isListe = false
        this.isGraphe = true
        this.isCard = false
        this.isAlerte = false
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

  runChart() {
    const ctx = 'chart_post';
    new Chart(ctx, {
      type: this.typeGraph,
      data: {
        labels: this.labelsGraph,
        datasets: this.datasGraph
      },
      options: this.optionsGraph
    });
  }

  displaydesc(code: string) {
    let desc = this.descriptifStats.find(d => {
      return d.code == code
    })

    if(desc) {
      this.descriptifStat = desc.content
    }else{
      this.descriptifStat = "Descriptif pas encore disponible !"
    }

    this.isDesc = true
  }

  closeDesc() {
    this.isDesc = false
  }

  sortData(column: string) {
    if (this.sort.active === column) {
      this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.active = column;
      this.sort.direction = 'asc';
    }
    const data = this.dataTable.slice();
    if (!this.sort.active /*|| this.sort.direction === ''*/) {
      this.dataTable = data;
      return;
    }

    this.dataTable = data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'metrique':
          return this.compare(a.metrique, b.metrique, isAsc);

        case 'valeur':
          return this.compare(a.mesure, b.mesure, isAsc);

        case 'unite':
          return this.compare(a.unite, b.unite, isAsc);

        case 'entite':
          return this.compare(a.entite, b.entite, isAsc);

        case 'date':
          return this.compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getNameSort(n: string){
    let name = ''
    switch (n){
      case 'Nom de la statistique': name = "metrique"
        break;
      case 'Valeur': name = "valeur"
        break;
      case 'Unite': name = "unite"
        break;
      case 'Entite': name = "entite"
        break;
      case 'Horodatage': name = "date"
        break

    }

    return name
  }

  selectItem(i: number) {
    this.dataTable.map((n) => {
      n.selected = false
    })
    i = (this.itemParPage * (this.p - 1)) + i
    this.dataTable[i].selected = true
  }
}
