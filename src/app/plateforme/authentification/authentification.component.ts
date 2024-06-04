import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelAuth} from "../../Model/ModelData";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent  extends BasePage implements OnInit {
  auths: ModelAuth[] = []
  suggestionData: ModelAuth[] = []
  isDeleting: boolean = false
  optionToDelete: string = ''
  indexToDelete!: number
  addOption: string = ''
  addParam: string = ''
  addActive: boolean = false
  isAdd: boolean = false
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {

    if(localStorage.getItem("authentification")){
      let data = localStorage.getItem("authentification")
      if(data){
        this.auths = JSON.parse(data)
        this.suggestionData = this.auths
      }
    }else{
      this.auths = this.fixture.auths
      this.suggestionData = this.auths
    }

  }

  toggleItem(i: number) {
    this.auths[i].isActif = !this.auths[i].isActif
   // localStorage.setItem("metrics", JSON.stringify(this.metrics))
  }

  selectItem(i: number){
    this.auths.map(a => {
      a.selected = false
    })

    this.auths[i].selected = true
  }

  closeDelete(){
    this.isDeleting = false
  }

  openDelete(i: number){
    this.optionToDelete = this.auths[i].option
    this.indexToDelete = i
    this.isDeleting = true
  }

  confirmDelete(){
    this.auths.splice(this.indexToDelete, 1)
    this.isDeleting = false
  }

  validerEditor(i: number){
    let ind = this.auths.findIndex((e) => e.option == this.suggestionData[i].option)
    if(ind && ind != -1){
      this.auths[ind].option = this.suggestionData[i].option
      this.auths[ind].parametre = this.suggestionData[i].parametre
      this.auths[ind].isActif = this.suggestionData[i].isActif
    }

    localStorage.setItem("authentification", JSON.stringify(this.suggestionData))
    this.suggestionData[i].isEdit = false
  }

  editor(i: number){
    this.auths[i].isEdit = true
  }

  annuleEdit(i: number){
    this.auths[i].isEdit = false
  }

  filtreData(metric: HTMLInputElement){
    if(metric.value.toString().length > 1){
      this.suggestionData = this.auths.filter(e =>
        e.option.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.suggestionData = this.auths
    }
  }

  addActivation(){
    this.addActive = !this.addActive
  }

  openAdd(){
    this.isAdd = true
  }

  annulerAdd(){
    this.isAdd = false
    this.addOption = ''
    this.addParam = ''
  }

  validateAddNew(){
    if(this.addOption != '' && this.addParam != ''){
      let data: ModelAuth = {option: this.addOption, parametre: this.addParam, isActif: this.addActive, selected: false, isEdit: false}
      this.suggestionData.push(data)
      //this.auths.push(data)
      localStorage.setItem("authentification", JSON.stringify(this.suggestionData))
      this.isAdd = false
      this.addOption = ''
      this.addParam = ''
    }
  }
}
