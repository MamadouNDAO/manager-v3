import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";

@Component({
  selector: 'app-droit',
  templateUrl: './droit.component.html',
  styleUrls: ['./droit.component.scss']
})
export class DroitComponent   extends BasePage implements OnInit {
  isFonction: boolean = true
  isService: boolean = false
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {

  }


  changeTabs(tab:string){
    switch (tab){
      case 'fonctionnalite':
        this.isFonction = true
        this.isService = false
        break;
      case 'service':
        this.isFonction = false
        this.isService = true
        break;

    }
  }
}
