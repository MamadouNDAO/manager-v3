import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelUtilisateur} from "../../Model/ModelData";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent   extends BasePage implements OnInit {
  users: ModelUtilisateur[] = []
  suggestionUsers: ModelUtilisateur[] = []
  p: number = 1;
  total: number = 0
  nombrePage: number = 1
  itemParPage: number = 11
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.users = this.fixture.users
    this.suggestionUsers = this.users
    this.total = this.users.length
    this.nombrePage = Math.ceil(this.total / this.itemParPage)
  }

  toggleItem(i: number) {
    this.users[i].isActif = !this.users[i].isActif
    // localStorage.setItem("metrics", JSON.stringify(this.metrics))
  }

  changePage($event: number) {
    if(($event <= this.nombrePage) && ($event >= 1)) {
      this.p = $event
    }
  }

  filtreData(metric: HTMLInputElement){
    if(metric.value.toString().length > 1){
      this.suggestionUsers = this.users.filter(e =>
        e.societe.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.prenom.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.nom.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.email.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.telephone.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.profil.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.poste.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.suggestionUsers = this.users
    }
  }
}
