import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelSupport} from "../../Model/ModelData";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent   extends BasePage implements OnInit {
  supports: ModelSupport[] =[]
  old: ModelSupport[] =[]
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {
    this.supports = this.fixture.support
    this.old = this.supports
  }

  editor(i: number){
    this.supports[i].isEdit = true
  }

  validerEditor(i: number){
    this.supports[i].isEdit = false
    localStorage.setItem("support", JSON.stringify(this.supports))
  }

  annuleEditor(i: number){
    this.supports[i].isEdit = false
  }

  filtreData(metric: HTMLInputElement){
    if(metric.value.toString().length > 1){
      this.supports = this.old.filter(e =>
        e.societe.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.supports = this.old
    }
  }
}
