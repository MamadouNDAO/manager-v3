import TravelMode = google.maps.TravelMode;

export interface ModelReservation{
  id: number,
  room: string,
  etage: string,
  site: string,
  entite: string,
  capacite: string,
  disponibilte: string,
  selected: boolean
}


export interface ModelAlarme{
  id: number,
  motif: string,
  espace: string,
  etage: string,
  site: string,
  entite: string,
  gravite: string,
  selected: boolean
}

export interface ModelMeteo{
  id: number,
  lieu: string,
  humidite: string,
  pression: string,
  vent: string,
  date: string,
  favoris: boolean,
  climat: string
}

export interface ModelIncident{
  id: number,
  image: string,
  titre: string,
  room: string,
  criticite: string,
  categorie: string,
  contenu: string,
  ticket: string
}

export interface ModelSetting{
  id: number,
  icone: string,
  type: string,
  label: string,
  descriptif: string,
  toggle: boolean,
  value: string,
  stateNotification: boolean,
  haveNotification: boolean
}

export interface ModelTransport{
  icon: string,
  moyen: string,
  favoris: boolean,
  travel: TravelMode,
  position: number
}

export interface ModelUser{
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  organization: any,
  role_description: string
}

export interface ModelEditUser{
  firstname: string,
  lastname: string,
  email: string,
  photo: string
}

export interface ModelProfilActu{
  id: number,
  name: string,
  image: string
}

export interface ModelActu{
  id: number,
  desc: string,
  createdAt: string,
  name: string,
  enabled: boolean,
  favorites: any[],
  likes: any[],
  pictures: any[],
  profile: ModelProfilActu,
  comments: ModelComment[]
}

export interface ModelRoom{
  id: string,
  name: string,
  occupation: boolean,
  site: string,
  floor: ModelFloor,
  reservationStatus: ModelReservStatut,
  zone: ModelZone,
  selected: boolean
}

export interface ModelFloor{
  id: string,
  name: string
}

export interface ModelReservStatut{
  message: string,
  state: string
}

export interface ModelZone{
  mapwizeId: string,
  maximumCapacity: number
}

export interface ModelHistoRiqueReservation{
  id: string,
  name: string,
  date: string,
  debut: string,
  fin: string,
  capacite: string,
  status: string,
  selected: boolean
}

export interface ModelHistory{
  id:number,
  dateStart: string,
  dateEnd: string,
  invites: string,
  subject: string,
  room: ModelRoomH,
  isCanceled: boolean,
  selected: boolean
}

export interface ModelRoomH{
  id: string,
  floor: string,
  name: string,
  site: string,
  technicalId: string
}

export interface WeatherModel{
  name: string,
  timezone: number,
  weather: WeatherDetail[],
  main: MainDetail,
  wind: WindDetail,
  favoris: boolean,
  position: number
}

export interface WeatherDetail{
  description: string,
  icon: string
}

export interface MainDetail{
  temp: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

export interface WindDetail{
  speed: number,
  deg: number
}

export interface ModelHistoTransport{
  icon: string,
  depart: string,
  arrivee: string,
  distance: string,
  duree: string,
  moyen: string,
  date: Date
}

export interface ModelComment{
  id: number,
  message: string,
  createdAt: string,
  author: ModelAuthor
}

export interface ModelAuthor{
  firstname: string,
  lastname: string
}


export interface CreateUser {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

export interface ModelHistoConst{
  title: string,
  description: string,
  category: ModelCateg,
  image: string
  room: ModelRoomCat,
  status: string,
  label: string,
  statement: ModelStatement
}

export interface ModelStatement{
  image: string
}

export interface ModelCateg{
  name: string
}

export interface ModelRoomCat{
  id: string,
  name: string,
}

export interface ModelNotif{
  id: number,
  label: string,
  type: string,
  date: Date,
  isRead: boolean
}


export interface ModelPriority{
  id: number,
  libelle: string,
}

export interface ModelCardAlarme{
  image: string,
  title: string,
  count: number,
  idChart: string
}

export interface ModelCardEnv{
  image: string,
  title: string,
  count: string,
  idChart: string
}

export interface ModelMetric{
  title: string,
  icone: string,
  count: number,
  component: string,
  isActif: boolean,
  isSelected: boolean
  isAlert: boolean,
  seuil: number,
  unite: string,
  categorie: string,
  isEditeSeuil: boolean
}

export interface ModelStatComp{
  metrique: string,
  os: string,
  usager: string,
  date: Date,
  mesure:string,
  selected: boolean
}

export interface ModelStatUsage{
  metrique: string,
  entite: string,
  /*site: string,
  batiment: string,
  etage*/
  os: string,
  usager: string,
  date: Date ,
  terminal: string
  mesure:string,
  selected: boolean,
  codeDesc: string,
  unite: string
}

export interface ModelStatFlux{
  metrique: string,
  entite: string,
  os: string,
  usager: string,
  date: Date,
  mesure:string,
  selected: boolean
}

export interface ModelCardFlux{
  image: string,
  title: string,
  count: number | string
}

export interface ModelAuth{
  option: string,
  parametre: string,
  isActif: boolean,
  selected: boolean
  isEdit: boolean
}

export interface ModelSupport{
  societe: string,
  email: string,
  fixe: string,
  mobile: string,
  lien: string,
  isEdit: boolean
}

export interface ModelUtilisateur{
  societe: string,
  prenom: string,
  nom: string,
  poste: string,
  email: string,
  telephone: string,
  profil: string,
  isActif: boolean
}

export interface ModelEntete{
  libelle: string,
  classe: string
}

export interface ModelListConnexion{
  metrique: string,
  entite: string,
  os: string,
  date: Date,
  mesure: string
}

export interface ModelCategorie{
  code: string,
  libelle: string,
  isActif: boolean
}

export interface ModelDescriptif{
  code: string,
  content: string
}

export interface ModelTableVersion{
  nom: string,
  versionApp: string,
  os: string,
  versionOS: string,
  marque: string,
  maj: Date,
  lastConnexion: Date,
  lastDeconnexion: Date,
  changeVersion: boolean,
  env: string,
}

export interface ModelLogInscription{
  app: string,
  nom: string,
  prenom: string,
  domaine: string,
  email: string,
  societe: string,
  entite: string,
  inscritAt: Date,
  isEdit: boolean
}

export interface ModelChampFormulaire{
  nom: string,
  statut: boolean,
  isEdite: boolean,
  oldValue: string,
  oldStatut: boolean
}
