import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../../themis-theme/base";
import {FixtureService} from "../../Model/fixture.service";
import {ModelChampFormulaire, ModelLogInscription} from "../../Model/ModelData";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionGestionComponent extends BasePage implements OnInit{
  data: ModelLogInscription[] = []
  suggestionData: ModelLogInscription[] = []
  isTableFormulaire: boolean = false
  champsForm: ModelChampFormulaire[] = []
  isEditor: boolean = false
  nomChamp: string = ''
  statutChamp: boolean = true
  isPopupDelete: boolean = false
  indexToDelete!: number
  indexToDeleteLog!: number
  titre: string = 'Inscription'
  isEditeLog: boolean = false
  isDeleteLog: boolean = false
  constructor(injector: Injector, private fixture: FixtureService) {
    super(injector)
  }

  ngOnInit(): void {

    if(localStorage.getItem("champLogForm")){
      let data = localStorage.getItem("champLogForm")
      if(data){
        this.data = JSON.parse(data)
        this.suggestionData = this.data
      }
    }else{
      this.data = this.fixture.logInscription
      this.suggestionData = this.data
    }
  }

  toggleItem(i: number){

  }

  gotoForm(){
    if(localStorage.getItem("champForm")){
      let data = localStorage.getItem("champForm")
      if(data){
        this.champsForm = JSON.parse(data)
      }
    }else{
      this.champsForm = this.fixture.champsFormulaire
    }
    this.isTableFormulaire = true
    this.titre = "Gestion du formulaire d'inscription"
  }

  closeForm(){
    this.isTableFormulaire = false
    this.titre = "Inscription"
  }

  openEditor() {
    this.isEditor = true
  }

  openEditorLog(i: number) {
    //this.isEditeLog = true
    this.data[i].isEdit = true
  }

  annulerEditor() {
    this.nomChamp = ''
    this.statutChamp = true
    this.isEditor = false
  }

  annulerEditorLog(i: number) {
    this.data[i].isEdit = false
  }

  validerEditorLog(i: number) {
      this.suggestionData[i].isEdit = false
      localStorage.setItem("champLogForm", JSON.stringify(this.suggestionData))
  }

  validerEditor() {
    if(this.nomChamp != ''){
      let data: ModelChampFormulaire = {nom: this.nomChamp, statut: this.statutChamp, isEdite: false, oldValue: this.nomChamp, oldStatut: this.statutChamp }
      this.champsForm.push(data)
      localStorage.setItem("champForm", JSON.stringify(this.champsForm))
      this.isEditor = false
      this.nomChamp = ''
      this.statutChamp = true
    }
  }

  statutOnEditor() {
    this.statutChamp = !this.statutChamp
  }

  modifyItem(i: number){
    this.champsForm[i].isEdite = true
    this.champsForm[i].oldValue = this.champsForm[i].nom
    this.champsForm[i].oldStatut = this.champsForm[i].statut
    localStorage.setItem("champForm", JSON.stringify(this.champsForm))
  }

  valideModify(i: number){
    this.champsForm[i].isEdite = false
    localStorage.setItem("champForm", JSON.stringify(this.champsForm))
  }

  annuleModify(i: number){
    this.champsForm[i].isEdite = false
    this.champsForm[i].nom = this.champsForm[i].oldValue
    this.champsForm[i].statut = this.champsForm[i].oldStatut
  }

  deleteItem(i: number){
    this.indexToDelete = i
    this.isPopupDelete = true
  }

  annulerDelete() {
    this.isPopupDelete = false
  }

  confirmeDelete() {
    this.champsForm.splice(this.indexToDelete, 1)
    localStorage.setItem("champForm", JSON.stringify(this.champsForm))
    this.isPopupDelete = false
  }

  filtreSalle(metric: HTMLInputElement){
    if(metric.value.toString().length > 1){
      this.suggestionData = this.data.filter(e =>
        e.prenom.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.nom.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.societe.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.entite.toLowerCase().includes(metric.value.toString().toLowerCase()) ||
        e.email.toLowerCase().includes(metric.value.toString().toLowerCase())
      );
    }else if(metric.value.toString().length == 0){
      this.suggestionData = this.data
    }
  }

  openDeleteLog(i: number){
    this.indexToDeleteLog = i
    this.isDeleteLog = true
  }

  annuleDeleteLog(){
    this.isDeleteLog = false
  }

  confirmeDeleteLog() {
    this.suggestionData.splice(this.indexToDeleteLog, 1)
    localStorage.setItem("champLogForm", JSON.stringify(this.suggestionData))
    this.isDeleteLog = false
  }
}
