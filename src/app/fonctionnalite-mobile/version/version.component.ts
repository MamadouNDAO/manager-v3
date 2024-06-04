import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelTableVersion} from "../../Model/ModelData";

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent extends BasePage implements OnInit{
  enteteTbale: string[] = ["Nom de l'application", "Version", "OS", "Version d'OS", "Marque", "Derniere mise à jour",
    "Derniere connexion", "Derniere deconnexion", "Notification de changement de version", "Environnement", "Actions"
  ]
  dataTbale: ModelTableVersion[] = []


  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.dataTbale = this.fixture.dataTableVersion

  }

  toggleItem(i: number){
    this.dataTbale[i].changeVersion = !this.dataTbale[i].changeVersion
  }

  openDelete(i: number){

  }
}
