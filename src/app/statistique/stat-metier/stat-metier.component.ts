import {AfterViewInit, Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelCardFlux, ModelStatUsage} from "../../Model/ModelData";

@Component({
  selector: 'app-stat-metier',
  templateUrl: './stat-metier.component.html',
  styleUrls: ['./stat-metier.component.scss']
})
export class StatMetierComponent extends BasePage implements OnInit  {
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }



  ngOnInit(): void {

  }

}
