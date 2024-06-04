import {AfterViewInit, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelCardFlux, ModelStatFlux, ModelStatUsage} from "../../Model/ModelData";

@Component({
  selector: 'app-stat-actu',
  templateUrl: './stat-actu.component.html',
  styleUrls: ['./stat-actu.component.scss']
})
export class StatActuComponent  extends BasePage implements OnInit  {
  @Input() activeFiltre: boolean = true;
  stats: ModelStatUsage[] = []
  suggestionStat
    : ModelStatUsage[] = []
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }



  ngOnInit(): void {
    this.stats = this.fixture.statsActu
    this.suggestionStat = this.stats
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
