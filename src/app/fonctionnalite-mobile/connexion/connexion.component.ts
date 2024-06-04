import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent extends BasePage implements OnInit{
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {


  }
}
