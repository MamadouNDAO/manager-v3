import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelAlarme, ModelCardFlux, ModelDescriptif, ModelStatFlux, ModelStatUsage} from "../../Model/ModelData";
import {ActivatedRoute} from "@angular/router";
import {isWithinInterval, parse} from 'date-fns';
import {retry} from "rxjs";
import {Sort} from "@angular/material/sort";

interface ModelGeneratorChart{
  idChart: string,
  typeChart: string,
  labels: string[],
  legend: boolean,
  datas: any[]
}
@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss']
})
export class ModelPageComponent extends BasePage implements OnInit, AfterViewInit {
  @Input() stats: ModelStatUsage[] = []
  @Input() metricCard: ModelCardFlux[]= []
  @Input() titreTop: string = 'Statistique'
  suggestionStat: ModelStatUsage[] = []
  filteredStat: ModelStatUsage[]= []
  typeStat: string | null =''
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  isListe: boolean = true
  isCard: boolean = false
  isGraphe: boolean = false
  enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "OS", "Horodatage", "Action"]
  unite: string = ''
  isDesc: boolean = false
  typeChart: string = 'line'
  labelsChart1: string[] = []
  dataCharts: any
  isLegens: boolean = false
  titreChart1: string =''
  iconChart1: string = ''

  titreChart2: string =''
  iconChart2: string = ''

  titreChart3: string =''
  iconChart3: string = ''

  titreChart4: string =''
  iconChart4: string = ''

  titreChart5: string =''
  iconChart5: string = ''

  titreChart6: string =''
  iconChart6: string = ''

  sort: Sort = {
    active: '',
    direction: ''
  };
  date1: any
  chartsToGenere: ModelGeneratorChart[] = []
  maxDate: Date = new Date()
  isPopupdate: boolean = false
  popupDate: string = ''
  listEntity = ['Iviplay']
  listOs = ['Tous les Os', 'Android', 'IOS', 'Desk']
  listTerminal = ['Samsung', 'Iphone', 'Techno', 'Hp']
  descriptifStat: string = ''
  descriptifStats: ModelDescriptif[] = []
  constructor(injector: Injector, private fixture: FixtureService, private route: ActivatedRoute) {
    super(injector)
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.suggestionStat = this.stats
    this.typeStat = this.route.snapshot.paramMap.get('model');
    console.log(this.typeStat)
    this.startDat()
    this.descriptifStats = this.fixture.descriptifStats

  }

  closeDesc() {
    this.isDesc = false
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
    this.filteredStat.map((n) => {
      n.selected = false
    })
    i = (this.itemParPage * (this.p - 1)) + i
    this.filteredStat[i].selected = true
  }

  startDat() {
    switch (this.typeStat){
      case 'usage':
        this.titreTop = "Statistique d'usage"
        this.stats = this.fixture.statsUsage
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.unite = "min"
        this.metricCard = this.fixture.cardUsage
        let dataUsage =  [
          {
            label: 'Android',
            data: [12, 16, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'IOS',
            data: [22, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]
        this.setChart('chart-1', 'line', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataUsage)
        this.titreChart1 = "Nombre de telechargements unitaires par jour"
        this.iconChart1 = "nb_download"

        let dataUsage2 = [
          {
            label: 'Android',
            data: [42, 36, 3, 5, 25, 18, 12, 7, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'IOS',
            data: [12, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },
          {
            label: 'Desk',
            data: [16, 40, 15, 17, 15, 28, 19, 17, 23],
            borderWidth: 3,
            borderColor: '#A5A5A5',
            backgroundColor: '#A5A5A5'
          }
        ]

        this.setChart('chart-2', 'bar', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataUsage2)
        this.titreChart2 = "Nombre d'inscriptions au formulaire par jour"
        this.iconChart2 = "formulaire"

        let dataUsage3 = [
          {
            label: 'Android',
            data: [142, 136, 13, 45, 125, 118, 122, 67, 10],
            borderWidth: 3,
            borderColor: '#5A6B7C',
            backgroundColor: '#5A6B7C'
          },
          {
            label: 'IOS',
            data: [102, 146, 115, 15, 45, 78, 22, 77, 103],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },
          {
            label: 'Desk',
            data: [16, 40, 15, 17, 15, 28, 19, 17, 23],
            borderWidth: 3,
            borderColor: '#A5A5A5',
            backgroundColor: '#A5A5A5'
          }
        ]

        this.setChart('chart-3', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataUsage3)
        this.titreChart3 = "Nombre de connexions via le module d'authentification par jour"
        this.iconChart3 = "connexion"

        let dataUsage4 = [
          {
            label: 'Android',
            data: [1201, 1678, 530, 5065, 2502, 1005, 1236, 470, 3586],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'IOS',
            data: [2200, 4600, 1507, 1589, 4505, 8782, 2202, 1477, 1303],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]

        this.setChart('chart-4', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataUsage4)
        this.titreChart4 = "Nombre d'activations de l'application (veille à actif) par jour"
        this.iconChart4 = "nb_activation"

        let dataUsage5 = [
          {
            label: 'Android',
            data: [7, 16, 5, 17, 20, 10, 12, 4, 3],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'IOS',
            data: [22, 4, 15, 15, 4, 8, 12, 14, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]

        this.setChart('chart-5', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataUsage5)
        this.titreChart5 = "Duree moyenne d’activation par jour"
        this.iconChart5 = "duree"

        let dataUsage6 = [
          {
            label: 'Android',
            data: [13, 4, 15, 3, 4, 10, 12, 16, 17],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'IOS',
            data: [2, 16, 5, 5, 16, 12, 8, 6, 7],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]

        this.setChart('chart-6', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataUsage6)
        this.titreChart6 = "Duree moyenne de veille par jour"
        this.iconChart6 = "duree_veille"
        break;
      //***********FIN USAGE*********************//

      case 'flux':
        this.titreTop = "Statistique de flux"
        this.stats = this.fixture.statsFlux
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.unite = "min"
        this.metricCard = this.fixture.cardFlux
        let dataFlux =  [
          {
            label: 'Espace',
            data: [120, 160, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'equipement',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]
        this.setChart('chart-1', 'line', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataFlux)
        this.titreChart1 = "Nombre de micro-localisation par jour"
        this.iconChart1 = "micro-localisation"

        let dataFlux2 = [
          {
            label: 'Espace',
            data: [42, 36, 3, 5, 25, 18, 12, 7, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Equipement',
            data: [12, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

        ]

        this.setChart('chart-2', 'bar', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataFlux2)
        this.titreChart2 = "Nombre de geofencing par jour"
        this.iconChart2 = "geofencing"

        let dataFlux3 = [
          {
            label: 'Espace',
            data: [142, 136, 13, 45, 125, 118, 122, 67, 10],
            borderWidth: 3,
            borderColor: '#5A6B7C',
            backgroundColor: '#5A6B7C'
          },
          {
            label: 'Equipement',
            data: [102, 146, 115, 15, 45, 78, 22, 77, 103],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

        ]

        this.setChart('chart-3', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataFlux3)
        this.titreChart3 = "Nombre de detection de proximite par jour"
        this.iconChart3 = "proximite"

        let dataFlux4 = [
          {
            label: 'Salle de reunion',
            data: [12, 16, 53, 50, 25, 10, 12, 47, 35],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Salle commune',
            data: [102, 146, 115, 15, 45, 78, 22, 77, 103],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

        ]

        this.setChart('chart-4', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataFlux4)
        this.titreChart4 = "Nombre de frequentation par jour"
        this.iconChart4 = "frequentation"

        break;

        //*************FIN FLUX***************//

      case 'actualite':
        this.titreTop = "Statistique de fil d'actualites"
        this.stats = this.fixture.statsActu
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.unite = "min"
        this.metricCard = this.fixture.cardActu
        let dataActu =  [
          {
            label: 'Yammers',
            data: [120, 160, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Securite',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

          {
            label: 'Hygiene et proprete',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }
        ]
        this.setChart('chart-1', 'line', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataActu)
        this.titreChart1 = "Nombre de posts publies par jour"
        this.iconChart1 = "nb_post"

        let dataActu2 = [
          {
            label: 'Yammers',
            data: [120, 160, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Securite',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

          {
            label: 'Hygiene et proprete',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }

        ]

        this.setChart('chart-2', 'bar', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataActu2)
        this.titreChart2 = "Nombre de commentaires par posts et par jour"
        this.iconChart2 = "nb_comment"

        let dataActu3 = [
          {
            label: 'Yammers',
            data: [120, 160, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Securite',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

          {
            label: 'Hygiene et proprete',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }

        ]

        this.setChart('chart-3', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataActu3)
        this.titreChart3 = "Nombre de likes par posts et par jour"
        this.iconChart3 = "nb_like"

        let dataActu4 = [
          {
            label: 'Yammers',
            data: [120, 160, 53, 50, 25, 10, 12, 47, 10],
            borderWidth: 3,
            borderColor: '#43505F',
            backgroundColor: '#43505F'
          },
          {
            label: 'Securite',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          },

          {
            label: 'Hygiene et proprete',
            data: [223, 46, 15, 15, 45, 8, 22, 7, 13],
            borderWidth: 3,
            borderColor: '#ECB6C3',
            backgroundColor: '#ECB6C3'
          }

        ]

        this.setChart('chart-4', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataActu4)
        this.titreChart4 = "Nombre de partages par posts et par jour"
        this.iconChart4 = "nb_partage"

        break;

        //*******FIN ACTU******//

      case 'environnement':
        this.titreTop = "Statistique d'environnement"
        this.stats = this.fixture.statsEnvironnement
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.unite = "min"
        this.metricCard = this.fixture.cardEnvironnement
        let dataEnvi =  [
          {
            label: '',
            data: [350, 250, 150, 50, 250, 50, 40],
            borderColor: '#ECB6C3',
            backgroundColor: '#5A6B7C',
          },

        ]
        this.setChart('chart-1', 'line', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataEnvi)
        this.titreChart1 = "CO² moyen par jour"
        this.iconChart1 = "co"

        let dataEnvi2 = [
          {
            label: '',
            data: [350, 250, 150, 50, 250, 50, 40],
            borderColor: '#ECB6C3',
            backgroundColor: '#5A6B7C',
          },

        ]

        this.setChart('chart-2', 'bar', ['16 dec', '17 dec', '18 dec', '19 dec', '20 dec'], true, dataEnvi2)
        this.titreChart2 = "Humidite moyenne par jour"
        this.iconChart2 = "humidite"

        let dataEnvi3 = [
          {
            label: '',
            data: [150, 50, 130, 50, 250, 50, 40],
            borderColor: '#ECB6C3',
            backgroundColor: '#5A6B7C',
          },

        ]

        this.setChart('chart-3', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataEnvi3)
        this.titreChart3 = "Temperature moyenne par jour"
        this.iconChart3 = "temperature"

        let dataEnvi4 = [
          {
            label: '',
            data: [150, 50, 130, 50, 250, 50, 40],
            borderColor: '#ECB6C3',
            backgroundColor: '#5A6B7C',
          },


        ]

        this.setChart('chart-4', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], true, dataEnvi4)
        this.titreChart4 = "Luminosite moyen par jour"
        this.iconChart4 = "luminosite"

        break;

      case 'timing':
        this.titreTop = "Statistique de timing de résolution de ticket"
        this.stats = this.fixture.statTiming
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.unite = "min"
        this.metricCard = this.fixture.cardTiming
        let data =  [{label: '',
        data: [12, 19, 20, 33, 21],
        borderWidth: 3,
        borderColor: '#5A6B7C',
        backgroundColor: '#5A6B7C'}]
        this.setChart('chart-1', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data)
        this.titreChart1 = "Duree moyenne par jour d'affectation d'un ticket"
        this.iconChart1 = "affectation"

        let data2 = [{label: '',
          data: [12, 19, 20, 33, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]

        this.setChart('chart-2', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data2)
        this.titreChart2 = "Duree moyenne par jour d'intervention"
        this.iconChart2 = "intervention"

        let data3 = [{label: '',
          data: [12, 19, 20, 33, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]

        this.setChart('chart-3', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data3)
        this.titreChart3 = "Duree moyenne par jour de resolution d'un ticket"
        this.iconChart3 = "resolution"

        let data4 = [{label: '',
          data: [12, 19, 20, 33, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]

        this.setChart('chart-4', 'bar', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data4)
        this.titreChart4 = "Duree moyenne par jour d'une enquete de satisfaction"
        this.iconChart4 = "enquete"
        break;

      case 'nombre_ticket':
        this.titreTop = "Nombre de tickets"
        this.stats = this.fixture.statTicket
        this.enteteTable =  ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.metricCard = this.fixture.cardTicket
        this.unite = "tickets"
        let data5 =  [{label: '',
          data: [12, 19, 20, 33, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-1', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data5)
        this.titreChart1 = "Nombre de tickets affectes par jour"
        this.iconChart1 = "affectation"

        let data6 =  [{label: '',
          data: [7, 39, 25, 63, 10],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-2', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data6)
        this.titreChart2 = "Nombre de tickets en cours par jour"
        this.iconChart2 = "nb_ticket_encours"

        let data7 =  [{label: '',
          data: [47, 30, 25, 63, 10],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-3', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data7)
        this.titreChart3 = "Nombre de tickets resolus par jour"
        this.iconChart3 = "nb_ticket_resolu"


        let data8 =  [{label: '',
          data: [5, 3, 0, 13, 10],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-4', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data8)
        this.titreChart4 = "Nombre de tickets non resolus par jour"
        this.iconChart4 = "nb_ticket_non_resolu"
        break;

      case 'enquete_satisfaction':

        this.titreTop = "Enquete de satisfaction"
        this.stats = this.fixture.statSatisfaction
        this.enteteTable = ["Nom de la statistique", "Valeur", "Unite", "Entite", "Horodatage", "Action"]
        this.metricCard = this.fixture.cardSatisfaction
        this.unite = "enquetes"
        let data9 =  [{label: '',
          data: [12, 19, 20, 33, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-1', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data9)
        this.titreChart1 = "Nombre d'enquetes transmises par jour'"
        this.iconChart1 = "enquete_transmise"

        let data10 =  [{label: '',
          data: [7, 39, 25, 63, 10],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-2', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data10)
        this.titreChart2 = "Nombre d'enquetes retournees par jour"
        this.iconChart2 = "enquete_retourne"

        let data11 =  [{label: '',
          data: [7, 5, 6, 9, 4],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-3', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data11)
        this.titreChart3 = "Note moyenne par jour par critère de satisfaction"
        this.iconChart3 = "note_satisfaction"
        break;

      case 'ressources':

        this.titreTop = "Statistiques des ressources"
        this.stats = this.fixture.statRessource
      //  this.enteteTable = ["Nom de la statistique", "Entite", "Date", "Mesure"]
        this.metricCard = this.fixture.cardRessource
        this.unite = 'mainteneurs'
        let data12 =  [{label: '',
          data: [12, 19, 20, 23, 21],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-1', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data12)
        this.titreChart1 = "Nombre de mainteneurs refences par jour'"
        this.iconChart1 = "nb_maintener"

        let data13 =  [{label: '',
          data: [7, 39, 25, 63, 10],
          borderWidth: 3,
          borderColor: '#5A6B7C',
          backgroundColor: '#5A6B7C'}]
        this.setChart('chart-2', 'line', ['20  dec', '19 dec', '18 dec', '17 dec', '15 dec'], false, data13)
        this.titreChart2 = "Nombre de mainteneurs connectes par jour"
        this.iconChart2 = "nb_maintener_connectes"
        break;



    }

    this.filteredStat = this.stats
    this.total = this.stats.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
  }

  runChart() {
    this.chartsToGenere.map(c => {
      const ctx = c.idChart;
      new this.Chart(ctx, {
        type: c.typeChart,
        data: {
          labels: c.labels,
          datasets: c.datas
        },
        options: {

          plugins: {
            legend: {
              display: c.legend
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          },

        }
      });
    })

  }

  setChart(IDChart: string, ChartType: string, ChartLabel: string[], ChartLegend: boolean, datas: any){
    let chart2: ModelGeneratorChart = {
      idChart: IDChart,
      typeChart: ChartType,
      labels: ChartLabel,
      legend: ChartLegend,
      datas: datas
    }
    this.chartsToGenere.push(chart2)
  }

  confirmeSelectDate(){
    this.isPopupdate = false

    this.filteredStat = []
    let i = 0
    this.stats.map(s => {
      //let datef = this.convertToDate(s.date)
      let datef: Date = s.date
     // console.log(datef)
      if(isWithinInterval(datef, { start: this.beforeday, end: this.today })){
        this.filteredStat.push(s)
        i++
      }
    })

    //if(metric.value.toString().length > 2){
      /*this.filteredStat = this.filteredStat.filter(e =>
        e.metrique.toLowerCase().includes(metric.value.toString().toLowerCase())
      );*/
   // }//else if(metric.value.toString().length == 0){
     // this.filteredStat = this.stats
   // }

    console.log(i)
  }

  ouvrePopupDate(p: string){
    this.popupDate = p
    this.isPopupdate = true
  }

  closePopupDate(){
    this.isPopupdate = false
  }

  convertToDate(dateS: string){
    let dateString = "20/12/2023";
    return parse(dateString, "dd/MM/yyyy", new Date());
  }

  haveChange(inputOS: HTMLInputElement){
    console.log("value", inputOS.value)
  }

  filtreSalle(metric: HTMLInputElement) {
    if(metric.value.toString().length > 0){
      this.filteredStat = this.stats.filter(e =>
        e.metrique.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.mesure.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.entite.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.filteredStat = this.stats
    }
  }

  sortData(column: string) {
    if (this.sort.active === column) {
      this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.active = column;
      this.sort.direction = 'asc';
    }
    const data = this.stats.slice();
    if (!this.sort.active /*|| this.sort.direction === ''*/) {
      this.filteredStat = data;
      return;
    }

    this.filteredStat = data.sort((a, b) => {
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

}
