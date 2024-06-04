import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../themis-theme/base";
import {
  ModelAlarme, ModelCardEnv,
  ModelCardFlux, ModelCategorie,
  ModelEntete,
  ModelListConnexion,
  ModelMetric,
  ModelSetting, ModelStatUsage
} from "../Model/ModelData";
import {FixtureService} from "../Model/fixture.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {tr} from "date-fns/locale";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class DashboardComponent extends BasePage implements OnInit{
  isActu: boolean = true
  isParam: boolean = false
  metrics: ModelMetric[] = []
  unite: string = ''
  componentCalled: string = "actu"
  margTop: string = 'marg-t-150'
  categorieActif: string = 'usage'
  libelleAllAction: string = 'Tout desactiver'
  isAllAction: boolean = true
  dataListe: ModelStatUsage[] = []
  dataCard: ModelCardFlux[] = []
  grapheData: any
  lables: string[] = []
  isLegend: boolean = false
  typeGraphe: string = 'bar'
  isView: boolean =false
  entetesTableConnexion: ModelEntete[] = [
    {libelle: "Nom de la statistique", classe: 'th-met'},
    {libelle:  "Valeur", classe: ''},
    {libelle:  "Unite", classe: ''},
    {libelle: "Entite", classe: ''},
    {libelle:  "Horodatage", classe: ''},

  ]

  entetesAlerte: ModelEntete[] = [
    {libelle: "Nom de la statistique", classe: 'th-met'},
    {libelle: "Valeur", classe: ''},
    {libelle: "Unite", classe: ''},
    {libelle: "Seuil", classe: ''},
    {libelle: "Entite", classe: ''},
    /*{libelle: "Site", classe: ''},
    {libelle: "Batiment", classe: ''},
    {libelle: "Etage", classe: ''},*/
    {libelle: "Horodatage", classe: ''},

  ]
  nameofcomponent = [
    //****USAGE****/
    "inscription","connexion",  "metier", "telechargement", "activation", "duree_activation", "duree_veille", "jr_utilisation", "nb_change", "nb_ouverture", "nb_abonne",
    //****FLUX*****/
    "micro-localisation", "geofencing", "proximite-flux","frequentation",

    //***ACTU****//
    "actu_like", "actu_comment", "actu_partage", "actu_favoris", "actu",
     "reservation", "co",
    "humidite", "temperature", "acces",  "affectation",
    "resolution", "enquete", "prise_charge", "validation"
  ]
  titreGraphe: string = ''
  suggestionStat: ModelStatUsage[] = []
  seuilValue!: number
  isEditSeuil: boolean = false
  alertActif: boolean = false
  nbMetricActif: number = 0

  titrePage: string= 'Tableau de bord'
  dataTableTemp: ModelStatUsage[] = []


  labelsGraphCo = [
    '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
  ]
  labelsGraphHumidite = [
    '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
  ]

  labelsGraphTemp = [
    '08-12-2023', '09-12-2023', '10-12-2023', '11-12-2023', '12-12-2023', '13-12-2023', '14-12-2023'
  ]
  labelsGrapheActu = ['30 nov', '29 nov', '28 nov', '27 nov', '26 nov', '25 nov', '24 nov', '23 nov', '22 nov'].sort()
  labelsGrapgeService = ['30 nov', '29 nov', '28 nov', '27 nov', '26 nov', '25 nov', '24 nov', '23 nov', '22 nov'].sort()
  dataGraphCo = [{
    data: [350, 250, 150, 50, 250, 50, 40],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C',
  }]
  dataGrapheService = [{
    data: [10, 6, 6, 5, 3, 2, 4, 5, 5],
    borderWidth: 3,
    borderColor: '#ECB6C3',
    backgroundColor: '#43505F'
  }]
  dataGraphHumidite = [{
    data: [52, 49, 41, 39, 60, 50, 43],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]
  dataGraphTemp = [{
    data: [22, 17, 16, 23, 16, 30, 17],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphAcces = [{
    data: [42, 67, 16, 83, 26, 30, 17],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGrapheReservation = [{
    data: [350, 250, 150, 50, 250, 50, 40],
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphAffectation = [{
    data: [12, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphResolution = [{
    data: [12, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphPriseCharge = [{
    data: [12, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphEnquete = [{
    data: [12, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphValidation = [{
    data: [52, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphProxi = [{
    data: [12, 20, 25, 15, 25, 10, 16],
    borderWidth: 3,
    borderColor: '#5A6B7C',
    backgroundColor: '#5A6B7C'
  }]

  dataGraphConnexion = [
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
  dataGrapheActu = [
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

  dataGrapheInscrit = [
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

  dataGrapheDownload = [
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

  dataGrapheActivation = [
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

  dataGrapheDureeActivation = [
    {

      label: 'Android',
      data: [12, 6, 5, 5, 8, 10, 12, 4, 3],
      borderWidth: 3,
      borderColor: '#43505F',
      backgroundColor: '#43505F'
    },
    {
      label: 'IOS',
      data: [15, 8, 15, 10, 4, 8, 7, 14, 13],
      borderWidth: 3,
      borderColor: '#ECB6C3',
      backgroundColor: '#ECB6C3'
    }
  ]

  dataGrapheMicroLocalisation = [
    {

      label: 'Espace',
      data: [12, 6, 5, 5, 8, 10, 12, 4, 3],
      borderWidth: 3,
      borderColor: '#43505F',
      backgroundColor: '#43505F'
    },
    {
      label: 'Equipement',
      data: [15, 8, 15, 10, 4, 8, 7, 14, 13],
      borderWidth: 3,
      borderColor: '#ECB6C3',
      backgroundColor: '#ECB6C3'
    }
  ]

  dataTabsParam: ModelCategorie[] = [
    {code: 'usage', libelle: "Usage", isActif: true},
    {code: 'flux', libelle: "Flux", isActif: false},
    {code: 'actu', libelle: "Actualite", isActif: false},
    {code: 'env', libelle: "Environnement", isActif: false},
    {code: 'acces', libelle: "Controle d'acces", isActif: false},
    {code: 'mission', libelle: "Mission", isActif: false},
    {code: 'reservation', libelle: "Reservation", isActif: false},
  ]
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    if(!localStorage.getItem("metrics")){
      this.metrics = this.fixture.metrics
      localStorage.setItem("metrics", JSON.stringify(this.metrics))
    }else{

      let data = localStorage.getItem("metrics")
      if(data){
        this.metrics = JSON.parse(data)
      }

    }
    //this.metrics = this.fixture.metrics



    this.metrics.map(m => {
      if(m.isSelected){
        if(this.nameofcomponent.includes(m.component) ){
          this.componentCalled = m.component
          this.seuilValue = m.seuil
          this.alertActif = m.isAlert
          this.unite = m.unite
        }else{
          this.componentCalled = ''
        }

        this.actifCard(this.componentCalled)
        this.isView = true
      }

      if(m.isActif){
        this.nbMetricActif += 1
      }
    })
    this.margTop = this.nbMetricActif > 6 ? 'marg-t-250' : 'marg-t-150'
  }

  getDesc(item: ModelMetric){
    let desc = "Activation / Désactivation des metriques "

    switch (item.title){
      case 'Notifications' : desc+="de notification"
        break;
      case 'Alarmes': desc+="d'alarme"
        break;
      case 'Interventions': desc+="d'intervention"
        break;
      case 'Personnes sur site': desc+="du nombre de personnes sur site"
        break;
      case 'Inscriptions': desc+="du nombre d'inscrits"
    }

    return desc
  }

  toggleItem(i: number) {
    if(!this.metrics[i].isActif){
      if(this.nbMetricActif < 12){
        if(this.metrics[i].component == 'nok'){
          alert("Ce composant n'est pas encore disponible !")
        }else{
          this.metrics[i].isActif = !this.metrics[i].isActif
          localStorage.setItem("metrics", JSON.stringify(this.metrics))
          this.nbMetricActif = 0
          this.metrics.map(m => {
            if(m.isActif){
              this.nbMetricActif += 1
            }
          })
        }

      }
    }else{
      this.metrics[i].isActif = false
      this.nbMetricActif -= 1
    }

    this.margTop = this.nbMetricActif > 6 ? 'marg-t-250' : 'marg-t-150'
    this.isAllAction = this.nbMetricActif > 0
    this.libelleAllAction = this.isAllAction ? "Tout desactiver" : "Tout activer"
  }

  toggleItemAlert(i: number) {
    this.metrics[i].isAlert = !this.metrics[i].isAlert
    if(this.componentCalled == this.metrics[i].component){
      this.alertActif = this.metrics[i].isAlert
    }
    localStorage.setItem("metrics", JSON.stringify(this.metrics))
  }

  goToParam(){
    if(this.isParam){
      this.titrePage = "Tableau de bord"
      let data = localStorage.getItem("metrics")
      if(data)
        this.metrics = JSON.parse(data)
    }else{
      this.titrePage = "Tableau de bord/Parametres"
    }

    this.isParam = !this.isParam


  }

  onSelectMetric(i: number) {
    this.isView = false
    this.componentCalled = ''
    this.metrics.map((i) => {
      i.isSelected = false
    })
    if(this.nameofcomponent.includes(this.metrics[i].component) ){
      this.componentCalled = this.metrics[i].component
    }else{
      this.componentCalled = ''
    }

    this.metrics[i].isSelected = true
    this.seuilValue = this.metrics[i].seuil
    this.alertActif = this.metrics[i].isAlert
    this.unite = this.metrics[i].unite
    localStorage.setItem("metrics", JSON.stringify(this.metrics))
    this.actifCard(this.componentCalled)
    setTimeout(() => {
      this.isView = true
    },500)

  }

  changeTabCate(i: number){
    this.dataTabsParam.map(c => { c.isActif = false})

    this.dataTabsParam[i].isActif = true
    this.categorieActif = this.dataTabsParam[i].code
  }

  desactiveActiveAll() {
    this.nbMetricActif = 0
    this.componentCalled = ''
    if(this.isAllAction){
      this.metrics.map(m => {m.isActif = false})
      this.nbMetricActif = 0
      this.isAllAction = false
      this.libelleAllAction = "Tout activer"
    }else{
      this.metrics.map(m => {
        if(this.nbMetricActif < 12){
          m.isActif = true
          this.nbMetricActif++
        }
      })
      this.nbMetricActif = this.metrics.length + 1
      this.isAllAction = true
      this.libelleAllAction = "Tout desactiver"
    }
    this.margTop = this.nbMetricActif > 6 ? 'marg-t-250' : 'marg-t-150'
    localStorage.setItem("metrics", JSON.stringify(this.metrics))
  }

  editorSeuil(i: number){
    this.metrics[i].isEditeSeuil = true
  }

  validationEditSeuil(i: number, val: number){
    this.metrics[i].seuil = Number(val)
    this.metrics[i].isEditeSeuil = false
    if(this.componentCalled == this.metrics[i].component){
      this.seuilValue = this.metrics[i].seuil
    }
    localStorage.setItem("metrics", JSON.stringify(this.metrics))
    console.log(val)
  }

  annuleEditSeuil(i: number){
    this.metrics[i].isEditeSeuil = false
  }


  filtreSalle(metric: HTMLInputElement){
    if(metric.value.toString().length > 0){
      //let data: ModelStatUsage[] = []
      /*switch (this.componentCalled){
        case 'actu':
          data = this.dataStatActu
          break;
        case 'metier':
          this.suggestionStat = this.dataTableService
          break;
        case 'connexion':
          data = this.dataTableConnexion
          break;
        case 'co':
          data = this.dataTableCo
          break;
        case 'humidite':
          data = this.dataTableHumidite
          break;
        case 'temperature':
          data = this.dataTableTemp
          break;
        case 'acces':
          data = this.dataTableAcces
          break;
        case 'proximite-flux':
          data = this.dataTableProximiteFlux
          break;
        case 'affectation':
          data = this.dataTableAffectation
          break;
        case 'reservation':
          data = this.dataStatReservation
          break;

        case 'resolution':
          data = this.dataTableResolution
          break;

        case 'prise_charge':
          data = this.dataTablePriseCharge
          break;
        case 'enquete':
          data = this.dataTableEnquete
          break;
        case 'validation':
          data = this.dataTableValidation
          break;
      }*/

      this.suggestionStat = this.dataListe.filter(e =>
        e.metrique.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.mesure.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.entite.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.actifCard(this.componentCalled)
    }
  }

  actifCard(cardNom: string) {
    switch (cardNom){
      case 'inscription':
        this.dataListe = this.fixture.statsIncrit
        this.dataCard = this.fixture.cardInscrit
        this.titreGraphe = "Nombre d'inscriptions aux formulaires par jour"
        this.grapheData = this.dataGrapheInscrit
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'telechargement':
        this.dataListe = this.fixture.statsDownloads
        this.dataCard = this.fixture.cardDownload
        this.titreGraphe = "Nombre de telechargement unitaire par jour"
        this.grapheData = this.dataGrapheDownload
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'activation':
        this.dataListe = this.fixture.statsActivation
        this.dataCard = this.fixture.cardActivation
        this.titreGraphe = "Nombre d'activation de l’application par jour"
        this.grapheData = this.dataGrapheActivation
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'duree_activation':
        this.dataListe = this.fixture.statsDureeActivation
        this.dataCard = this.fixture.cardDureeActivation
        this.titreGraphe = "Duree moyenne d'activation de l’application par jour"
        this.grapheData = this.dataGrapheDureeActivation
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'duree_veille':
        this.dataListe = this.fixture.statsDureeVeille
        this.dataCard = this.fixture.cardDureeVeille
        this.titreGraphe = "Duree moyenne de veille de l’application par jour"
        this.grapheData = this.dataGrapheDureeActivation
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'jr_utilisation':
        this.dataListe = this.fixture.statsUtilisation
        this.dataCard = this.fixture.cardUtilisation
        this.titreGraphe = "Nombre de jour d'utilisation"
        this.grapheData = this.dataGrapheDureeActivation
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'micro-localisation':
        this.dataListe = this.fixture.statsMicroLacalisation
        this.dataCard = this.fixture.cardMicroLocalisation
        this.titreGraphe = "Nombre de micro-localisation par jour"
        this.grapheData = this.dataGrapheMicroLocalisation
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'geofencing':
        this.dataListe = this.fixture.statsGeofencing
        this.dataCard = this.fixture.cardGeofencing
        this.titreGraphe = "Nombre de geofencing par jour"
        this.grapheData = this.dataGraphHumidite
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'frequentation':
        this.dataListe = this.fixture.statsFrequentation
        this.dataCard = this.fixture.cardFrequentation
        this.titreGraphe = "Nombre de frequentation par salle par jour"
        this.grapheData = this.dataGraphHumidite
        this.isLegend = false
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'actu':
        this.dataListe = this.fixture.metricNbPost
        this.dataCard = this.fixture.cardNbPost
        this.titreGraphe = "Nombre de posts publies par jour"
        this.grapheData = this.dataGrapheActu
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGrapheActu
        break;
      case 'actu_like':
        this.dataListe = this.fixture.statsPostLike
        this.dataCard = this.fixture.cardLike
        this.titreGraphe = "Nombre de likes par posts et par jour"
        this.grapheData = this.dataGrapheActu
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGrapheActu
        break;
      case 'actu_comment':
        this.dataListe = this.fixture.statsPostComment
        this.dataCard = this.fixture.cardComment
        this.titreGraphe = "Nombre de commentaires par posts et par jour"
        this.grapheData = this.dataGrapheActu
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGrapheActu
        break;
      case 'actu_partage':
        this.dataListe = this.fixture.statsPostPartage
        this.dataCard = this.fixture.cardPartage
        this.titreGraphe = "Nombre de partages par posts et par jour"
        this.grapheData = this.dataGrapheActu
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGrapheActu
        break;
      case 'actu_favoris':
        this.dataListe = this.fixture.statsPostFavoris
        this.dataCard = this.fixture.cardFavoris
        this.titreGraphe = "Nombre de favoris par posts et par jour"
        this.grapheData = this.dataGrapheActu
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGrapheActu
        break;
      case 'metier':
        this.dataListe = this.fixture.metricNbService
        this.dataCard = this.fixture.cardNbService
        this.titreGraphe = "Nombre de services actifs par jour"
        this.grapheData = this.dataGrapheService
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGrapgeService
        break;
      case 'connexion':
        this.dataListe = this.fixture.connexions
        this.dataCard = this.fixture.cardNbConnexion
        this.titreGraphe = "Nombre de connexions via le module dauthentification par jour"
        this.grapheData = this.dataGraphConnexion
        this.isLegend = true
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'co':
        this.dataListe = this.fixture.statsCO
        this.dataCard = this.fixture.cardCo
        this.titreGraphe = "Taux de CO² moyen par jour"
        this.grapheData = this.dataGraphCo
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphCo
        break;
      case 'humidite':
        this.dataListe = this.fixture.statsHumidite
        this.dataCard = this.fixture.cardHumidite
        this.titreGraphe = "Taux d'humidite moyenne par jour"
        this.grapheData = this.dataGraphHumidite
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphHumidite
        break;
      case 'temperature':
        this.dataListe = this.fixture.statsTemperature
        this.dataCard = this.fixture.cardTemperature
        this.titreGraphe = "Temperature moyenne par jour"
        this.grapheData = this.dataGraphTemp
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'acces':
        this.dataListe = this.fixture.statAcces
        this.dataCard = this.fixture.cardAcces
        this.titreGraphe = "Nombre de demande d'acces par jour"
        this.grapheData = this.dataGraphAcces
        this.isLegend = false
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'proximite-flux':
        this.dataListe = this.fixture.statProximiteFlux
        this.dataCard = this.fixture.cardProximiteFlux
        this.titreGraphe = "Nombre de detection de proximite par jour"
        this.grapheData = this.dataGraphProxi
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'affectation':
        this.dataListe = this.fixture.statsAffectation
        this.dataCard = this.fixture.cardAffectation
        this.titreGraphe = "Duree moyenne d'affectation d'un ticket par jour"
        this.grapheData = this.dataGraphAffectation
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'reservation':
        this.dataListe = this.fixture.statReservation
        this.dataCard = this.fixture.cardNbReservation
        this.titreGraphe = "Nombre de reservations par jour"
        this.grapheData = this.dataGrapheReservation
        this.isLegend = false
        this.typeGraphe = 'line'
        this.lables = this.labelsGraphTemp
        break;
      case 'resolution':
        this.dataListe = this.fixture.statsResolution
        this.dataCard = this.fixture.cardResolution
        this.titreGraphe = "Duree moyenne de resolution d'un ticket par jour"
        this.grapheData = this.dataGraphResolution
        this.isLegend = false
        this.typeGraphe = 'bar'
        break;
      case 'prise_charge':
        this.dataListe = this.fixture.statsPriseCharge
        this.dataCard = this.fixture.cardPriseCharge
        this.titreGraphe = "Duree moyenne de prise en charge d'un ticket par jour"
        this.grapheData = this.dataGraphPriseCharge
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'enquete':
        this.dataListe  = this.fixture.statsEnquete
        this.dataCard = this.fixture.cardSatisfaction
        this.titreGraphe = "Duree moyenne d'une enquete de satisfaction par jour"
        this.grapheData = this.dataGraphEnquete
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      case 'validation':
        this.dataListe = this.fixture.statsValidation
        this.dataCard = this.fixture.cardValidation
        this.titreGraphe = "Duree moyenne de validation d'un ticket par jour"
        this.grapheData = this.dataGraphValidation
        this.isLegend = false
        this.typeGraphe = 'bar'
        this.lables = this.labelsGraphTemp
        break;
      default : this.dataListe = []
        this.dataCard = []
        this.titreGraphe = ''
        break;
    }

    this.suggestionStat = this.dataListe
  }



  protected readonly alert = alert;
}
