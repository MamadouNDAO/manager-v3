import { Injectable } from '@angular/core';
import {
  ModelAlarme, ModelAuth, ModelCardAlarme, ModelCardEnv, ModelCardFlux, ModelChampFormulaire, ModelDescriptif,
  ModelHistoRiqueReservation,
  ModelIncident, ModelListConnexion, ModelLogInscription,
  ModelMeteo, ModelMetric,
  ModelReservation,
  ModelSetting, ModelStatComp, ModelStatFlux, ModelStatUsage, ModelSupport, ModelTableVersion,
  ModelTransport, ModelUtilisateur
} from "./ModelData";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  reservations: ModelReservation[] = [
    {id: 1, room: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 2, room: 'Salon Auteil', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 3, room: 'Salon Deauville', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 4, room: 'Salon Cambargo', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 5, room: 'Salon Chantily', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 6, room: 'Salon Scrabble', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 7, room: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 8, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 9, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: true},
    {id: 10, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 11, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 12, room: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 13, room: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 14, room: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 15, room: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 16, room: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 17, room: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 18, room: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 19, room: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 20, room: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 21, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 22, room: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 23, room: 'Salon Angers', etage: 'Etage 7', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 24, room: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 25, room: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 26, room: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 27, room: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 28, room: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 29, room: 'Salon Angers', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
    {id: 30, room: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', capacite: '8 personnes', disponibilte: "Libre jusqu'à 9:37 AM", selected: false},
  ]

  alarmes: ModelAlarme[] = [
    {id: 1, espace: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 2, espace: 'Salon Auteil', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 3, espace: 'Salon Deauville', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 4, espace: 'Salon Cambargo', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: true},
    {id: 5, espace: 'Salon Chantily', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Critique", selected: false},
    {id: 6, espace: 'Salon Scrabble', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Critique", selected: false},
    {id: 7, espace: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 8, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 9, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 10, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 11, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 12, espace: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 13, espace: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', motif: 'Incendie', gravite: "Faible", selected: false},
    {id: 14, espace: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: "Fuite d'eau", gravite: "Critique", selected: false},
    {id: 15, espace: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: "Fuite d'eau", gravite: "Critique", selected: false},
    {id: 16, espace: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: "Fuite d'eau", gravite: "Critique", selected: false},
    {id: 17, espace: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', motif: 'Intrusion', gravite: "Critique", selected: false},
    {id: 18, espace: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: 'Intrusion', gravite: "Critique", selected: false},
    {id: 19, espace: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: 'Surcapacité', gravite: "Faible", selected: false},
    {id: 20, espace: 'Salon Angers', etage: 'Etage 3', site: 'Le Themis', entite: 'France Galop', motif: '8 personnes', gravite: "Faible", selected: false},
    {id: 21, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: '8 personnes', gravite: "Faible", selected: false},
    {id: 22, espace: 'Salon Angers', etage: 'Etage 4', site: 'Le Themis', entite: 'France Galop', motif: '8 personnes', gravite: "Faible", selected: false},
    {id: 23, espace: 'Salon Angers', etage: 'Etage 7', site: 'Le Themis', entite: 'France Galop', motif: '8 personnes', gravite: "Faible", selected: false},
    {id: 24, espace: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', motif: 'Surcapacité', gravite: "Faible", selected: false},
    {id: 25, espace: 'Salon Angers', etage: 'Etage 5', site: 'Le Themis', entite: 'France Galop', motif: 'Surcapacité', gravite: "Critique", selected: false},
    {id: 26, espace: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', motif: 'Surcapacité', gravite: "Critique", selected: false},
    {id: 27, espace: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', motif: 'Intrusion', gravite: "Critique", selected: false},
    {id: 28, espace: 'Salon Angers', etage: 'Etage 6', site: 'Le Themis', entite: 'France Galop', motif: 'Intrusion', gravite: "Critique", selected: false},
    {id: 29, espace: 'Salon Angers', etage: 'Etage 2', site: 'Le Themis', entite: 'France Galop', motif: "Fuite d'eau", gravite: "Critique", selected: false},
    {id: 30, espace: 'Salon Angers', etage: 'Etage 1', site: 'Le Themis', entite: 'France Galop', motif: "Fuite d'eau", gravite: "Critique", selected: false},
  ]

  meteos: ModelMeteo[] = [
    {id: 1, lieu: 'Paris', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: true, climat: 'pluie'},
    {id: 2, lieu: 'Nice', humidite: '10%', pression: '1020', vent: '169 km/h', date: '29 sept 2023, 11:29:56', favoris: true, climat: 'soleil'},
    {id: 3, lieu: 'Lyon', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: false, climat: 'pluie'},
    {id: 4, lieu: 'Bordeaux', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: false, climat: 'soleil'},
    {id: 5, lieu: 'Marseille', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: false, climat: 'nuage-soleil'},
    {id: 6, lieu: 'Montpelier', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: false, climat: 'pluie'},
    {id: 7, lieu: 'Toulouse', humidite: '78%', pression: '1020', vent: '6.69 km/h', date: '29 sept 2023, 11:29:56', favoris: false, climat: 'nuage-soleil'}
  ]

  incidents: ModelIncident[] = [
    {id: 1, room: 'Bureau 203', titre: 'Chaise cassée', image: 'image-01', criticite: 'Moyenne', categorie: 'Service généreaux', contenu: "Le fauteuil de bureau présente des roulettes défectueuses,entravant la mobilité de l'utilisateur.", ticket: '034584'},
    {id: 2, room: 'Salle de réunion B', titre: 'Ordinateur défaillant', image: 'image-02', criticite: 'Elevée', categorie: 'Service informatique', contenu: "L'ordinateur ne démarre pas correctement, empêchant la tenue des réunions prévues.", ticket: '078956'},
    {id: 3, room: 'Couloir principal', titre: 'Eclairage en panne', image: 'image-03', criticite: 'Urgente', categorie: 'Maintenance', contenu: "Les ampoules du couloir principal sont hors service, créant un environnement de travail peu sûr en raison de l'obscurité.", ticket: '023658'},
  ]

 /* settings: ModelSetting[] = [
    {id: 1, icone: 'notification', type: 'Notifications', domaine: "Déclaration d'incidents", descriptif: 'Activation / Desactivation des notifications', toggle: false, value: ''},
    {id: 2, icone: 'notification', type: 'Notifications', domaine: "Météo", descriptif: 'Activation / Desactivation des notifications', toggle: true, value: ''},
    {id: 3, icone: 'setting', type: 'Paramétres', domaine: "Cartographie", descriptif: 'Diametre de la zone de recherche par defaut', toggle: false, value: '50 Km'},
  ]*/

  transports: ModelTransport[] = [
   /* {icon: 'driving', moyen: 'Voiture personnelle', distance: '87 Km', duree: '45h', favoris: true},
    {icon: 'walking', moyen: 'A pied', distance: '100 Km', duree: '37 min', favoris: false},
    {icon: 'transit', moyen: 'Voiture en commun', distance: '90 Km', duree: '45 min', favoris: false},
    {icon: 'taxi', moyen: 'Taxi', distance: '458 Km', duree: '2h', favoris: false},*/
  ]

  historiques: ModelHistoRiqueReservation[] = [
    {id: 'abc', name: 'Salon Angers', date: '17 septembre', debut: '17h30', fin: '18h00', capacite: '8 personnes', status: 'A venir', selected: false},
    {id: 'abcd', name: 'Salon Angers', date: '17 septembre', debut: '17h30', fin: '18h00', capacite: '8 personnes', status: 'A venir', selected: true},
    {id: 'abce', name: 'Salon Angers', date: '17 septembre', debut: '17h30', fin: '18h00', capacite: '8 personnes', status: 'A venir', selected: false},
    {id: 'abcf', name: 'Salon Angers', date: '17 septembre', debut: '17h30', fin: '18h00', capacite: '8 personnes', status: 'A venir', selected: false}
  ]

  cardAlarmes: ModelCardAlarme[] = [
    {image: 'incendie', title: 'Incendies', count: 78, idChart: 'chart-incendie'},
    {image: 'fuite', title: "Fuite d'eau", count: 45, idChart: 'chart-fuite'},
      {image: 'intrusion', title: 'Intrusion', count: 0, idChart: 'chart-intrusion'},
    {image: 'surcapacite', title: 'Surcapacite', count: 78, idChart: 'chart-surcapacite'},
  ]

  cardAlarmes2: ModelCardAlarme[] = [
    {image: "formulaire", title: "Nombre total d’inscriptions aux formulaires", count: 78514, idChart: 'chart-incendie'},
    {image: 'connexion', title: "Nombre total de connexions via le module d’authentification", count: 45, idChart: 'chart-fuite'},
    {image: 'jr', title: "Nombre de jours moyens d'utilisations", count: 25684, idChart: 'chart-intrusion'}
  ]

  cardUsage: ModelCardAlarme[] = [
    {image: "nb_download", title: "Nombre total de telechargement unitaire", count: 785, idChart: 'chart-incendie'},
    {image: "formulaire", title: "Nombre total d’inscriptions aux formulaires", count: 745, idChart: 'chart-incendie'},
    {image: 'connexion', title: "Nombre total de connexions via le module d’authentification", count: 1445, idChart: 'chart-fuite'},
    {image: 'nb_activation', title: "Nombre total d’activations de l’application (Veille a actif)", count: 2350, idChart: 'chart-fuite'},
    {image: 'duree', title: "Duree moyenne totale d’activation (En heures)", count: 675, idChart: 'chart-fuite'},
    {image: 'duree_veille', title: "Duree moyenne totale de veille (En heures)", count: 145, idChart: 'chart-fuite'},
    {image: 'nb_use', title: "Nombre de jours moyens d’utilisation (jusqu’à la desinscription)", count: 124, idChart: 'chart-fuite'},
    {image: 'nb_mode_affichage', title: "Nombre moyen total de changements de modes d’affichage (En clics)", count: 1036, idChart: 'chart-intrusion'},
    {image: 'nb_ouvre_service', title: "Nombre moyenne totale d’ouverture de services (En clics)", count: 2568, idChart: 'chart-intrusion'}
  ]

  cardEnvironnement: ModelCardEnv[] = [
    {image: "co", title: "CO²", count: '450 ppm', idChart: 'chart-incendie'},
    {image: "temperature", title: "Temperature", count: '27 °C', idChart: 'chart-incendie'},
    {image: "humidite", title: "Humidite", count: '52%', idChart: 'chart-incendie'},
    {image: 'luminosite', title: "Luminosite", count: '14%', idChart: 'chart-fuite'},
    {image: 'presence', title: "Detection de presence", count: '74', idChart: 'chart-fuite'},
    {image: 'bruit', title: "Bruit", count: '48 db', idChart: 'chart-fuite'},
  ]

  cardCo: ModelCardFlux[] = [
    {image: "co", title: "Taux de CO² du jour", count: '450 ppm'},
    {image: "co", title: "Taux moyen de CO²", count: '410 ppm'},
  ]

  cardHumidite: ModelCardFlux[] = [
    {image: "humidite", title: "Taux d'humidite du jour", count: '52%'},
    {image: "humidite", title: "Taux moyen d'humidite", count: '48%'},
  ]

  cardTemperature: ModelCardFlux[] = [
    {image: "temperature", title: "Temperature du jour", count: '17°C'},
    {image: "temperature", title: "Temperature moyenne", count: '22°C'},
  ]

  cardAffectation: ModelCardFlux[] = [
    {image: "affectation", title: "Duree moyenne d'affectation d'un ticket du jour", count: '17 min'},
    {image: "affectation", title: "Duree moyenne d'affectation d'un ticket", count: '20 min'},
  ]

  cardResolution: ModelCardFlux[] = [
    {image: "resolution", title: "Duree moyenne de resolution d'un ticket du jour", count: '19 min'},
    {image: "resolution", title: "Duree moyenne de resolution d'un ticket", count: '20 min'},
  ]

  cardPriseCharge: ModelCardFlux[] = [
    {image: "prise_charge", title: "Duree moyenne de prise en charge d'un ticket du jour", count: '16 min'},
    {image: "prise_charge", title: "Duree moyenne de prise en charge d'un ticket", count: '18 min'},
  ]

  metrics: ModelMetric[] = [
    //*****USAGE************//
    {title: "Nombre d'inscriptions aux formulaires", count: 78514, icone: 'formulaire', component: 'inscription', isActif: true, isSelected: false, isAlert: true, seuil: 350, unite: "utilisateur", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de connexions via le module d’authentification", count: 675, icone: 'connexion', component: 'connexion', isActif: true, isSelected: false, isAlert: true, seuil: 150, unite: "connexion", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de services actifs", count: 5, icone: 'jr', component: 'metier', isActif: true, isSelected: false, isAlert: true, seuil: 7, unite: "jour", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de telechargements unitaires", count: 5, icone: 'nb_download', component: 'telechargement', isActif: true, isSelected: false, isAlert: true, seuil: 500, unite: "telechargement", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre d’activations de l’application", count: 5, icone: 'jr', component: 'activation', isActif: true, isSelected: false, isAlert: true, seuil: 5000, unite: "activation", categorie: 'usage', isEditeSeuil: false},
    {title: "Duree d’activation", count: 5, icone: 'duree', component: 'duree_activation', isActif: false, isSelected: false, isAlert: true, seuil: 10, unite: "heure", categorie: 'usage', isEditeSeuil: false},
    {title: "Duree de veille", count: 5, icone: 'duree', component: 'duree_veille', isActif: false, isSelected: false, isAlert: true, seuil: 20, unite: "heure", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de jours d’utilisation", count: 5, icone: 'jr', component: 'jr_utilisation', isActif: false, isSelected: false, isAlert: true, seuil: 150, unite: "jour", categorie: 'usage', isEditeSeuil: false},
    /*{title: "Nombre de changement du mode d'affichage", count: 5, icone: 'nb_mode_affichage', component: 'nb_change', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "clics", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre d’ouverture de services", count: 5, icone: 'nb_ouverture_affichage', component: 'nb_ouverture', isActif: false, isSelected: false, isAlert: true, seuil: 50, unite: "clics", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre d’abonnés par services", count: 5, icone: 'jr', component: 'nb_abonne', isActif: false, isSelected: false, isAlert: true, seuil: 500, unite: "abonnes", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de notifications par services", count: 5, icone: 'nb_notif', component: 'nb_notif', isActif: false, isSelected: false, isAlert: true, seuil: 200, unite: "notifications", categorie: 'usage', isEditeSeuil: false},*/


    //*****ACTUALITE************//
    {title: "Nombre de post publies", count: 282, icone: 'nb_post', component: 'actu', isActif: true, isSelected: true, isAlert: true, seuil: 10, unite: "post", categorie: 'actu', isEditeSeuil: false},
    {title: "Nombre de likes par post", count: 282, icone: 'nb_like', component: 'actu_like', isActif: false, isSelected: false, isAlert: true, seuil: 20, unite: "likes", categorie: 'actu', isEditeSeuil: false},
    {title: "Nombre de commentaires par post", count: 282, icone: 'nb_comment', component: 'actu_comment', isActif: false, isSelected: false, isAlert: true, seuil: 20, unite: "commentaires", categorie: 'actu', isEditeSeuil: false},
    {title: "Nombre de partages par post", count: 282, icone: 'nb_partage', component: 'actu_partage', isActif: false, isSelected: false, isAlert: true, seuil: 20, unite: "partages", categorie: 'actu', isEditeSeuil: false},
    {title: "Nombre de mises en favoris par post", count: 282, icone: 'nb_favoris', component: 'actu_favoris', isActif: false, isSelected: false, isAlert: true, seuil: 20, unite: "favoris", categorie: 'actu', isEditeSeuil: false},

    //*****FLUX************//
    {title: "Nombre de detection de proximite", count: 16, icone: 'proximite', component: 'proximite-flux', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "detection", categorie: 'flux', isEditeSeuil: false},
    {title: "Micro-localisation", count: 16, icone: 'micro-localisation', component: 'micro-localisation', isActif: false, isSelected: false, isAlert: true, seuil: 150, unite: "miro-localisation", categorie: 'flux', isEditeSeuil: false},
    {title: "Geofencing", count: 16, icone: 'geofencing', component: 'geofencing', isActif: false, isSelected: false, isAlert: true, seuil: 100, unite: "geofencing", categorie: 'flux', isEditeSeuil: false},
    {title: "Frequentation", count: 16, icone: 'frequentation', component: 'frequentation', isActif: false, isSelected: false, isAlert: true, seuil: 50, unite: "par salle", categorie: 'flux', isEditeSeuil: false},

    //*****ENVIRONNEMENT************//


    //*****ACCES************//


    //*****MISSION************//


    //*****RESERVATION************//

    {title: "Nombre de reservation de salle", count: 16, icone: 'nb_reservation', component: 'reservation', isActif: true, isSelected: false, isAlert: true, seuil: 70, unite: "reservation",categorie: 'reservation', isEditeSeuil: false},
    {title: "Taux de CO²", count: 16, icone: 'co', component: 'co', isActif: true, isSelected: false, isAlert: true, seuil: 400, unite: "ppm", categorie: 'env', isEditeSeuil: false},
    {title: "Taux d'humidite", count: 16, icone: 'humidite', component: 'humidite', isActif: true, isSelected: false, isAlert: true, seuil: 50, unite: "%", categorie: 'env', isEditeSeuil: false},
    {title: "Temperature", count: 16, icone: 'temperature', component: 'temperature', isActif: false, isSelected: false, isAlert: true, seuil: 35, unite: "°C", categorie: 'env', isEditeSeuil: false},
    {title: "Nombre de demande d'acces", count: 16, icone: 'connexion', component: 'acces', isActif: false, isSelected: false, isAlert: true, seuil: 650, unite: "demande", categorie: 'acces', isEditeSeuil: false},
    //{title: "Nombre de badges actifs", count: 16, icone: 'nb_badge', component: 'nok', isActif: false, isSelected: false, isAlert: true, seuil: 350, unite: "badge", categorie: 'acces'},
   // {title: "Nombre de detection de presence", count: 16, icone: 'presence', component: 'nok', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "detection", categorie: 'env'},

    {title: "Duree d'affectation d'un ticket", count: 16, icone: 'affectation', component: 'affectation', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "minute", categorie: 'mission', isEditeSeuil: false},
    {title: "Duree de resolution d'un ticket", count: 16, icone: 'resolution', component: 'resolution', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "minute", categorie: 'mission', isEditeSeuil: false},
    {title: "Duree d'une enquete de satisfaction", count: 16, icone: 'enquete', component: 'enquete', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "minute", categorie: 'mission', isEditeSeuil: false},
    {title: "Duree de prise en charge d'un ticket", count: 16, icone: 'prise_charge', component: 'prise_charge', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "minute", categorie: 'mission', isEditeSeuil: false},
    {title: "Duree de validation d'un ticket", count: 16, icone: 'duree_validation', component: 'validation', isActif: false, isSelected: false, isAlert: true, seuil: 30, unite: "minute", categorie: 'mission', isEditeSeuil: false},
  ]


  //###############LISTE########################//

  //*******USAGE*******//

  statsIncrit:  ModelStatUsage[] = [
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Desk", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Ios", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Desk", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
  ]

  statsDownloads:  ModelStatUsage[] = [
    {metrique: "Nombre de telechargement unitaire du jour de la version Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
    {metrique: "Nombre de telechargement unitaire du jour de la version IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "510", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
    {metrique: "Nombre de telechargement unitaire du jour de la version Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
    {metrique: "Nombre de telechargement unitaire du jour de la version IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "623", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
    {metrique: "Nombre de telechargement unitaire du jour de la version Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
    {metrique: "Nombre de telechargement unitaire du jour de la version IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: 'nb_download', unite: 'telechargements'},
  ]

  statsActivation:  ModelStatUsage[] = [
    {metrique: "Nombre d’activations du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "1230", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "5100", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "420", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "623", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "1100", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "420", usager: '', selected: false, terminal: '', codeDesc: 'nb_activation', unite: 'activations'},
  ]

  statsDureeActivation:  ModelStatUsage[] = [
    {metrique: "Duree moyenne d’activation du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "12", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne d’activation du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "18", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne d’activation du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "4", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne d’activation du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "6", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne d’activation du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "11", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne d’activation du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "7", usager: '', selected: false, terminal: '', codeDesc: 'duree_activation', unite: 'heures'},
  ]

  statsDureeVeille:  ModelStatUsage[] = [
    {metrique: "Duree moyenne de veille du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "11", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "4", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "2", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour de l’application Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "7", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour de l’application IOS", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "3", usager: '', selected: false, terminal: '', codeDesc: 'duree_veille', unite: 'heures'},
  ]

  statsUtilisation:  ModelStatUsage[] = [
    {metrique: "Nombre de jour d'utilisation l’application Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: 'jours'},
    {metrique: "Nombre de jour d'utilisation de l’application IOS du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "11", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: ''},
    {metrique: "Nombre de jour d'utilisation de l’application Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "4", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: ''},
    {metrique: "Nombre de jour d'utilisation de l’application IOS du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "2", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: ''},
    {metrique: "Nombre de jour d'utilisation de l’application Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "7", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: ''},
    {metrique: "Nombre de jour d'utilisation de l’application IOS du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "3", usager: '', selected: false, terminal: '', codeDesc: 'jr_utilisation', unite: ''},
  ]

  //*******FLUX**********//
  statsMicroLacalisation:  ModelStatUsage[] = [
    {metrique: "Nombre de micro-localisation par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'micro_localisation_espace', unite: 'jours'},
    {metrique: "Nombre de micro-localisation par equipement du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'micro_localisation_espace', unite: ''},
    {metrique: "Nombre de micro-localisation par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "98", usager: '', selected: false, terminal: '', codeDesc: 'micro_localisation_espace', unite: 'jours'},
    {metrique: "Nombre de micro-localisation par equipement du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "75", usager: '', selected: false, terminal: '', codeDesc: 'micro_localisation_espace', unite: ''},
    ]

  statsGeofencing:  ModelStatUsage[] = [
    {metrique: "Nombre de geofencing par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: 'jours'},
    {metrique: "Nombre de geofencing par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: ''},
    {metrique: "Nombre de geofencing par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "98", usager: '', selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: 'jours'},
    {metrique: "Nombre de geofencing par espace du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "75", usager: '', selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: ''},
  ]

  statsFrequentation:  ModelStatUsage[] = [
    {metrique: "Nombre de frequentation par salle du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'frequentation', unite: 'jours'},
    {metrique: "Nombre de frequentation par salle du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'frequentation', unite: ''},
    {metrique: "Nombre de frequentation par salle du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "98", usager: '', selected: false, terminal: '', codeDesc: 'frequentation', unite: 'jours'},
    {metrique: "Nombre de frequentation par salle du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "75", usager: '', selected: false, terminal: '', codeDesc: 'frequentation', unite: ''},
  ]

  //***********ACTU**************//
  metricNbPost: ModelStatUsage[] = [
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "12", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "25", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: 'nb_post', unite: 'posts'},

  ]

  statsPostLike: ModelStatUsage[] = [
    {metrique: "Nombre de likes sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "12", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "25", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de likes sur posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: 'nb_like', unite: 'likes'},

  ]

  statsPostComment: ModelStatUsage[] = [
    {metrique: "Nombre de commentaires sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "12", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "25", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de commentaires sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-18"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},

  ]

  statsPostPartage: ModelStatUsage[] = [
    {metrique: "Nombre de partages sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "12", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "25", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de partages sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-18"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: 'nb_partage', unite: 'partages'},

  ]

  statsPostFavoris: ModelStatUsage[] = [
    {metrique: "Nombre de mises en favoris sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts Yammers du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "12", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts sur la securite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "25", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},
    {metrique: "Nombre de mises en favoris sur posts hygiene et proprete du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-18"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: 'nb_favoris', unite: 'partages'},

  ]
  //###############CARD########################//

  //*******USAGE*******//
  cardInscrit: ModelCardFlux[] = [
    {image: 'formulaire', title: "Nombre total d'inscriptions aux formulaires", count: 1178},
    {image: 'formulaire', title: "Nombre total d'inscriptions aux formulaires via Android", count: 425},
    {image: 'formulaire', title: "Nombre total d'inscriptions aux formulaires via IOS", count: 678},
    {image: 'formulaire', title: "Nombre total d'inscriptions aux formulaires via Desk", count: 75},
  ]

  cardDownload: ModelCardFlux[] = [
    {image: 'nb_download', title: "Nombre total de telechargement unitaire", count: 895},
    {image: 'nb_download', title: "Nombre total de telechargement unitaire de la version Android", count: 325},
    {image: 'nb_download', title: "Nombre total de telechargement unitaire de la version IOS", count: 570},
  ]

  cardActivation: ModelCardFlux[] = [
    {image: 'jr', title: "Nombre total d’activations de l’application", count: 7025},
    {image: 'jr', title: "Nombre total d’activations de l’application Android", count: 1325},
    {image: 'jr', title: "Nombre total d’activations de l’application IOS", count: 5700},
  ]

  cardDureeActivation: ModelCardFlux[] = [
    {image: 'duree', title: "Duree moyenne totale d’activation de l’application", count: 40},
    {image: 'duree', title: "Duree moyenne totale d’activation de l’application Android", count: 17},
    {image: 'duree', title: "Duree moyenne totale d’activation de l’application IOS", count: 23},
  ]

  cardDureeVeille: ModelCardFlux[] = [
    {image: 'duree', title: "Duree moyenne totale de veille de l’application", count: 20},
    {image: 'duree', title: "Duree moyenne totale de veille de l’application Android", count: 7},
    {image: 'duree', title: "Duree moyenne totale de veille de l’application IOS", count: 13},
  ]

  cardUtilisation: ModelCardFlux[] = [
    {image: 'jr', title: "Nombre total de jour d'utilisation", count: 272},
    {image: 'jr', title: "Nombre total de jour d'utilisation sur Android", count: 127},
    {image: 'jr', title: "Nombre total de jour d'utilisation sur IOS", count: 145},
  ]

  //*********ACTU***************//

  cardNbPost: ModelCardFlux[] = [
    {image: 'nb_post', title: 'Nombre total de tous lesposts', count: 262},
    {image: 'nb_post', title: 'Nombre total de posts Yammer', count: 162},
    {image: 'nb_post', title: "Nombre total de post sur hygiene et proprete", count: 30},
    {image: 'nb_post', title: 'Nombre total de post sur la sécurité', count: 70},
  ]


  cardLike: ModelCardFlux[] = [
    {image: 'nb_like', title: 'Nombre total de likes sur les tous posts', count: 262},
    {image: 'nb_like', title: 'Nombre total de likes sur les posts Yammer', count: 162},
    {image: 'nb_like', title: "Nombre total de likes sur les post sur hygiene et proprete", count: 30},
    {image: 'nb_like', title: 'Nombre total de likes sur les post sur la sécurité', count: 70},
  ]

  cardComment: ModelCardFlux[] = [
    {image: 'nb_comment', title: 'Nombre total de commentaires sur tous les posts', count: 262},
    {image: 'nb_comment', title: 'Nombre total de commentaires sur tous les posts Yammer', count: 162},
    {image: 'nb_comment', title: "Nombre total de commentaires sur tous les post sur hygiene et proprete", count: 30},
    {image: 'nb_comment', title: 'Nombre total de commentaires sur tous les post sur la sécurité', count: 70},
  ]

  cardPartage: ModelCardFlux[] = [
    {image: 'nb_partage', title: 'Nombre total de partages sur tous les posts', count: 262},
    {image: 'nb_partage', title: 'Nombre total de partages sur les posts Yammer', count: 162},
    {image: 'nb_partage', title: "Nombre total de partages sur tous les post sur hygiene et proprete", count: 30},
    {image: 'nb_partage', title: 'Nombre total de partages sur tous les post sur la sécurité', count: 70},
  ]

  cardFavoris: ModelCardFlux[] = [
    {image: 'nb_favoris', title: 'Nombre total de favoris sur tous les posts', count: 262},
    {image: 'nb_favoris', title: 'Nombre total de favoris sur les posts Yammer', count: 162},
    {image: 'nb_favoris', title: "Nombre total de favoris sur tous les post sur hygiene et proprete", count: 30},
    {image: 'nb_favoris', title: 'Nombre total de favoris sur tous les post sur la sécurité', count: 70},
  ]
//*******FLUX*******//
  cardMicroLocalisation: ModelCardFlux[] = [
    {image: 'micro-localisation', title: "Nombre total de micro-localisation", count: 302},
    {image: 'micro-localisation', title: "Nombre total de micro-localisation espace", count: 137},
    {image: 'micro-localisation', title: "Nombre total de micro-localisation par equipement", count: 165},
  ]

  cardGeofencing: ModelCardFlux[] = [
    {image: 'geofencing', title: "Nombre total de geofencing", count: 302},
  ]

  cardFrequentation: ModelCardFlux[] = [
    {image: 'frequentation', title: "Nombre total de frequentation par salle", count: 342},
  ]


  statCompactes: ModelStatComp[]= [
    {metrique: "Nombre total d’inscriptions aux formulaires", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre total de connexions via le module d'authentification", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre de jours moyens d'utilisations", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre de changement moyen du mode d'affichage", os: "Ios", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre d'ouverture moyenne de service", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre  total de posts publies", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre  total de Like par post", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre de commentaires moyennes par post", os: "Android", usager: "Prestataire", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre de notification moyenne par service", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre total de reservation par salles, types de salles et etages", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre de badges electroniques moyens actifs", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre  total d’inscriptions aux formulaires", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},
    {metrique: "Nombre d’inscriptions aux formulaires", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false},

  ]

  statsUsage: ModelStatUsage[] = [
    {metrique: "Nombre de telechargements unitaires d'IOS du jour", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "45", unite: 'telechargements', selected: false, codeDesc: 'nb_download'},
    {metrique: "Nombre de telechargements unitaires d'android du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "56", unite: 'telechargements', selected: false, codeDesc: 'nb_download'},

    {metrique: "Nombre d'inscriptions aux formulaires du jour sur Android", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour sur IOS", entite: "Iviplay", os: "IOS", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour sur Desk", entite: "Iviplay", os: "Desk", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},

    {metrique: "Nombre de connexions IOS du jour", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "782", selected: false, codeDesc: 'nb_connect', unite: 'connexions'},
    {metrique: "Nombre de connexions android du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "432", selected: false, codeDesc: 'nb_connect', unite: 'connexions'},
    {metrique: "Nombre d’activations du jour de l’application IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "346", selected: false, codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application android", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "312", selected: false, codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Duree moyenne du jour d’activation sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "18", selected: false, codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne du jour d’activation sur android", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "16", selected: false, codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "7", selected: false, codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour sur Android", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "8", selected: false, codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Nombre de jours d’utilisation sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "48", selected: false, codeDesc: 'jr_utilisation', unite: 'jours'},
    {metrique: "Nombre de jours d’utilisation sur android", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "40", selected: false, codeDesc: 'jr_utilisation', unite: 'jours'},
    {metrique: "Nombre moyenne du jour de changements de modes sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "986", selected: false, codeDesc: 'nb_change', unite: 'clics'},
    {metrique: "Nombre moyenne du jour de changements de modes sur android", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "986", selected: false, codeDesc: 'nb_change', unite: 'clics'},
    {metrique: "Nombre moyenne du jour d’ouverture de services sur IOS", entite: "Iviplay", os: "IOS", usager: "Prestataire", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "774", selected: false, codeDesc: 'nb_ouverture', unite: 'clics'},
    {metrique: "Nombre moyenne du jour d’ouverture de services sur android", entite: "Iviplay", os: "android", usager: "Prestataire", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "704", selected: false, codeDesc: 'nb_ouverture', unite: 'clics'},

  ]

  statsEnvironnement: ModelStatUsage[] = [
    {metrique: "CO²", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "450", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Humidite", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "50", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Temperature", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "27", selected: false, codeDesc: 'temperature', unite: '°C'},
    {metrique: "Luminosite", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "14", selected: false, codeDesc: 'luminosite', unite: '%'},

    {metrique: "Bruit", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "48", selected: false, codeDesc: 'bruit', unite: 'db'},
  ]

  statsCO: ModelStatUsage[] = [
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "450", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "420", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "430", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "350", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "320", selected: false, codeDesc: 'co', unite: 'ppm'},
    {metrique: "Taux de CO² du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "460", selected: false, codeDesc: 'co', unite: 'ppm'},
  ]

  statsAffectation: ModelStatUsage[] = [
    {metrique: "Duree moyenne d'affectation d'un ticket du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "12 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne d'affectation d'un ticket du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "17 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne d'affectation d'un ticket du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "20 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne d'affectation d'un ticket du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "25 min", selected: false, codeDesc: '', unite: ''},

  ]

  statsResolution: ModelStatUsage[] = [
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "15 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "10 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "25 min", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Samsung", mesure: "35 min", selected: false, codeDesc: '', unite: ''},

  ]

  statsPriseCharge: ModelStatUsage[] = [
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-23"), terminal: "Samsung", mesure: "15", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "10", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "25", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Samsung", mesure: "35", selected: false, codeDesc: '', unite: ''},

  ]

  statsEnquete: ModelStatUsage[] = [
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "25", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "30", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "15", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Samsung", mesure: "35", selected: false, codeDesc: '', unite: ''},

  ]

  statsValidation: ModelStatUsage[] = [
    {metrique: "Duree moyenne du jour de validation d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "20", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de validation d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "35", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de validation d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "35", selected: false, codeDesc: '', unite: ''},
    {metrique: "Duree moyenne du jour de validation d'un ticket", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-219"), terminal: "Samsung", mesure: "30", selected: false, codeDesc: '', unite: ''},
  ]

  statsHumidite: ModelStatUsage[] = [
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-25"), terminal: "Samsung", mesure: "52", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-24"), terminal: "Samsung", mesure: "50", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-23"), terminal: "Samsung", mesure: "41", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "40", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "39", selected: false, codeDesc: 'humidite', unite: '%'},
    {metrique: "Taux d'humidite du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Samsung", mesure: "60", selected: false, codeDesc: 'humidite', unite: '%'},
  ]

  statsTemperature: ModelStatUsage[] = [
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-24"), terminal: "Samsung", mesure: "22°C", selected: false, codeDesc: '', unite: ''},
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-23"), terminal: "Samsung", mesure: "27°C", selected: false, codeDesc: '', unite: ''},
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-22"), terminal: "Samsung", mesure: "17°C", selected: false, codeDesc: '', unite: ''},
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-21"), terminal: "Samsung", mesure: "26°C", selected: false, codeDesc: '', unite: ''},
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Samsung", mesure: "30°C", selected: false, codeDesc: '', unite: ''},
    {metrique: "Temperature du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Samsung", mesure: "16°C", selected: false, codeDesc: '', unite: ''},
  ]

  statsFlux: ModelStatUsage[] = [
    {metrique: "Nombre de micro-localisation par espace du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "456", selected: false, terminal: '', codeDesc: 'micro_localisation_espace', unite: 'micro-localisations'},
    {metrique: "Nombre de micro-localisation par equipement du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "782", selected: false, terminal: '', codeDesc: 'micro_localisation_equipement', unite: 'micro-localisations'},
    {metrique: "Nombre de detection de proximite par espace du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "345", selected: false, terminal: '', codeDesc: 'detection_espace', unite: 'detections'},
    {metrique: "Nombre de detection de proximite par equipement du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "180", selected: false, terminal: '', codeDesc: 'detection_equipement', unite: 'detections'},
    {metrique: "Nombre de geofencing par espace du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "256", selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: 'geofencing'},
    {metrique: "Nombre de geofencing par equipement du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "480", selected: false, terminal: '', codeDesc: 'nb_geofencing', unite: 'geofencing'},
    {metrique: "Frequentation moyenne du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "15", selected: false, terminal: '', codeDesc: 'frequentation', unite: 'par salle'},
  ]

  statProximiteFlux: ModelStatUsage[] = [
    {metrique: "Nombre de detection de proximite par espace du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "345", selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de detection de proximite par equipement du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), mesure: "180", selected: false, terminal: '', codeDesc: '', unite: ''},
  ]

  cardFlux: ModelCardFlux[] = [
    {image: 'micro-localisation', title: 'Nombre total de micro-localisation', count: 475},
    {image: 'proximite', title: 'Nombre total de detection de proximite', count: 1075},
    {image: 'geofencing', title: 'Nombre total de geofencing', count: 175},
    {image: 'frequentation', title: 'Nombre total de frequentation moyenne', count: 655},
  ]

  cardProximiteFlux: ModelCardFlux[] = [
    {image: 'proximite', title: 'Nombre total de detection de proximite par espace', count: 1075},
    {image: 'proximite', title: 'Nombre total de detection de proximite par equipement', count: 1012},
    {image: 'proximite', title: 'Nombre de detection de proximite par espace du jour', count: 275},
    {image: 'proximite', title: 'Nombre de detection de proximite par equipement du jour', count: 175},
  ]

  cardActu: ModelCardFlux[] = [
    {image: 'nb_post', title: 'Nombre de posts publies', count: 475},
    {image: 'nb_like', title: 'Nombre de Like par post', count: 1075},
    {image: 'nb_comment', title: 'Nombre de commentaires par post', count: 175},
    {image: 'nb_partage', title: 'Nombre de partages par post', count: 655},
    {image: 'nb_favoris', title: 'Nombre de favoris par post', count: 655},
  ]


  cardNbConnexion: ModelCardFlux[] = [
    {image: 'connexion', title: "Nombre total de connexions ", count: 662},
    {image: 'connexion', title: 'Nombre total de connexions Android', count: 242},
    {image: 'connexion', title: "Nombre total de connexions Ios", count: 250},
    {image: 'connexion', title: 'Nombre total de connexions Desk', count: 170},
  ]

  cardNbControleAcces: ModelCardFlux[] = [
    {image: 'connexion', title: "Nombre total de demande d'acces ", count: 662},
    {image: 'nb_badge', title: 'Nombre moyen de badges electroniques actifs', count: 242},
    {image: 'connexion', title: "Nombre de demande d'acces en cours", count: 250},
    {image: 'connexion', title: "Nombre de demande d'acces cloturees", count: 170},
  ]

  cardAcces: ModelCardFlux[] = [
    {image: 'connexion', title: "Nombre total de demande d'acces ", count: 662},
    {image: 'connexion', title: "Nombre de demande d'acces en cours", count: 250},
    {image: 'connexion', title: "Nombre de demande d'acces cloturees", count: 170},
  ]

  cardNbReservation: ModelCardFlux[] = [
    {image: 'nb_reservation', title: "Nombre total de reservation", count: 362},
    {image: 'nb_reservation', title: 'Nombre total de reservation de salles communes', count: 102},
    {image: 'nb_reservation', title: "Nombre total de reservation de salles Iviflo", count: 140},
    {image: 'nb_reservation', title: "Nombre total de reservation de salles Iviplay", count: 76},
    {image: 'nb_reservation', title: "Nombre total de reservation de salles à l'etage 1", count: 70},
    {image: 'nb_reservation', title: "Nombre total de reservation de salles à l'etage 2", count: 47},
    {image: 'nb_reservation', title: "Nombre total de reservation de salles à l'etage 3", count: 65},
    {image: 'taux_occupation', title: "Taux d'occupation", count: 43},
  ]

  cardMetier: ModelCardFlux[] = [
    {image: 'nb_ouvre_service', title: 'Nombre de services actifs', count: 5},
    {image: 'nb_badge_electronique', title: 'Nombre de badges electroniques actifs', count: 11},
    {image: 'nb_notif', title: 'Nombre de notifications par services', count: 175},
    {image: 'nb_reservation', title: 'Nombre de reservations', count: 1655},
    {image: 'traitement_histo', title: 'Traitement des historiques', count: 655},
  ]

  cardNbService: ModelCardFlux[] = [
    {image: 'nb_ouvre_service', title: 'Nombre de services actifs du jour', count: 5},
  ]

  statsActu: ModelStatUsage[] = [
    {metrique: "Nombre de posts publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de Likes par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "782", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de commentaires par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "340", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de partages par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "180", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de favoris par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "250", selected: false, codeDesc: 'nb_favoris', unite: 'favoris'},
    {metrique: "Nombre de posts publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: 'nb_post', unite: 'posts'},
    {metrique: "Nombre de Like par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "986", selected: false, codeDesc: 'nb_like', unite: 'likes'},
    {metrique: "Nombre de commentaires par post du jour", entite: "Iviplay", os: "Android", usager: "Prestataire", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "774", selected: false, codeDesc: 'nb_comment', unite: 'commentaires'},
    {metrique: "Nombre de partages par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: 'nb_partage', unite: 'partages'},
    {metrique: "Nombre de favoris par post du jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: 'nb_favoris', unite: 'favoris'},

  ]



  metricNbService: ModelStatUsage[] = [
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "4", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "2", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "3", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "6", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Prestataire", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "6", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "10", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs par jour", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-19"), terminal: "Alpha", mesure: "5", selected: false, codeDesc: '', unite: ''},
  ]

  statsMetier: ModelStatUsage[] = [
    {metrique: "Nombre de services actifs", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre d’abonnes par services", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "782", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de notifications par services", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "340", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de badges electroniques actifs", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "180", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation par salles", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "250", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation par type de  salles", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation par etage", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "986", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de services actifs", entite: "Iviplay", os: "Android", usager: "Prestataire", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "774", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre d’abonnes par services", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de notifications par services", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de posts publies", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de badges electroniques actifs", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation par etage", entite: "Iviplay", os: "Android", usager: "Occupant", date: new Date("2023-12-20"), terminal: "Alpha", mesure: "456", selected: false, codeDesc: '', unite: ''},
  ]

  auths: ModelAuth[] = [
    {option: "Formulaire d'inscription", parametre: "Formulaire standart", isActif: true, selected: false, isEdit: false},
    {option: "Saisie de l'identifiant", parametre: "20 caracteres max", isActif: true, selected: false, isEdit: false},
    {option: "Saisie du mot de passe", parametre: "20 caracteres max", isActif: true, selected: false, isEdit: false},
    {option: "Mot de passe oublié", parametre: "Formulaire specifique", isActif: true, selected: false, isEdit: false},
    {option: "Gestion SSO", parametre: "https://server-client.com", isActif: true, selected: false, isEdit: false},

  ]

  support: ModelSupport[] = [
    {societe: 'Iviplay', email: 'support@iviplay.com', fixe: '+33 6 11 22 33 44', mobile: '+33 6 44 77 98 40', lien: 'https://iviplay.com', isEdit: false}
  ]

  users: ModelUtilisateur[] = [
    {societe: 'Iviplay', prenom: 'Lucie', nom: 'Durant', poste: 'Designer', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Julien', nom: 'Niamke', poste: 'Developpeur', email: 'Julien.niamke@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Achile', nom: 'Doutie', poste: 'Developpeur', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Alain fabrice', nom: 'Bouetou', poste: 'Developpeur', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Mamadou', nom: 'Ndao', poste: 'Developpeur', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Baye', nom: 'Lam', poste: 'Devops', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Yannick', nom: 'Lascaux', poste: 'Directeur', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Idir', nom: 'Djebbar', poste: 'Chef de projet', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Jaures', nom: 'Tchapet', poste: 'Chef de projet', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Marie', nom: 'Barbier', poste: 'Designer', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'David', nom: 'Durant', poste: 'Devops', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
    {societe: 'Iviplay', prenom: 'Tresor', nom: 'Simo', poste: 'Developpeur', email: 'luci.durant@iviplay.com', telephone: '+33 6 11 44 77 16', isActif: true, profil: 'Visiteur'},
  ]

  connexions:  ModelStatUsage[] = [
    {metrique: "Nombre de connexions Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Ios du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Desk du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "113", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Ios du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "118", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Desk du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "32", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "103", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Ios du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "160", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Desk du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "72", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Android du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Ios du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de connexions Desk du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
  ]

  statControleAcces: ModelListConnexion[] = [
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123"},
    {metrique: "Nombre de badges electroniques actifs du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "110"},
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "42"},
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "113"},
    {metrique: "Nombre de badges electroniques actifs du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "118"},
    {metrique: "Nombre badges electroniques actifs du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "32"},
  ]

  statAcces: ModelStatUsage[] = [
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "123", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "110", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-18"), mesure: "42", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de demande d'acces du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-17"), mesure: "113", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
  ]

  statTiming: ModelStatUsage[] = [
    {metrique: "Duree moyenne du jour d'affectation d'un ticket", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_affectation', unite: 'min'},
    {metrique: "Duree moyenne du jour d'intervention", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20"), mesure: "15", usager: '', selected: false, terminal: '', codeDesc: 'duree_intervention', unite: 'min'},
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20"), mesure: "25", usager: '', selected: false, terminal: '', codeDesc: 'duree_resolution', unite: 'min'},
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20"), mesure: "12", usager: '', selected: false, terminal: '', codeDesc: 'duree_prise_charge', unite: 'min'},
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20"), mesure: "30", usager: '', selected: false, terminal: '', codeDesc: 'duree_enquete', unite: 'min'},
    {metrique: "Duree moyenne du jour d'affectation d'un ticket", entite: "Iviplay", os: "Tous les OS", date:  new Date("2023-12-20"), mesure: "5", usager: '', selected: false, terminal: '', codeDesc: 'duree_affectation', unite: 'min'},
    {metrique: "Duree moyenne du jour d'intervention", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-20") , mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_intervention', unite: 'min'},
    {metrique: "Duree moyenne du jour de resolution d'un ticket", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-19"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_resolution', unite: 'min'},
    {metrique: "Duree moyenne du jour de prise en charge d'un ticket", entite: "Iviplay", os: "Tous les OS", date: new Date("2023-12-19"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_prise_charge', unite: 'min'},
    {metrique: "Duree moyenne du jour d'une enquete de satisfaction", entite: "Iviplay", os: "Tous les OS", date:new Date("2023-12-19") , mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'duree_enquete', unite: 'min'},

  ]

  statReservation: ModelStatUsage[] = [
    {metrique: "Nombre de reservation de salles communes du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-22") , mesure: "13", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation de salles Iviflo du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-21") , mesure: "5", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation de salles Iviplay du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-21") , mesure: "8", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation de salles à l'etage 1 du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20") , mesure: "23", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation de salles à l'etage 2 du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19") , mesure: "2", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
    {metrique: "Nombre de reservation de salles à l'etage 3 du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19") , mesure: "6", usager: '', selected: false, terminal: '', codeDesc: '', unite: ''},
  ]

  cardTiming: ModelCardFlux[] = [
    {image: 'affectation', title: "Duree moyenne d'affectation d'un ticket ", count: "10 min"},
    {image: 'intervention', title: "Duree moyenne d'intervention", count: "15 min"},
    {image: 'resolution', title: "Duree moyenne de resolution d'un ticket", count: "25 min"},
    {image: 'enquete', title: "Duree moyenne d'une enquete de satisfaction", count: "30 min"},
    {image: 'prise_charge', title: "Duree moyenne de prise en charge d'un ticket", count: "30 min"},
    {image: 'duree_validation', title: "Duree moyenne de validation d'un ticket", count: "30 min"},
  ]

  cardValidation: ModelCardFlux[] = [
    {image: 'duree_validation', title: "Duree moyenne de validation d'un ticket", count: "30 min"},
  ]

  cardTicket: ModelCardFlux[] = [
    {image: 'nb_ticket_encours', title: "Nombre total de tickets", count: "653"},
    {image: 'nb_ticket_encours', title: "Nombre de tickets en cours ", count: "26"},
    {image: 'affectation', title: "Nombre total de tickets affectes", count: "501"},
    {image: 'affectation', title: "Nombre de tickets affectes du jour", count: "501"},
    {image: 'nb_ticket_resolu', title: "Nombre total de tickets resolus", count: "415"},
    {image: 'nb_ticket_non_resolu', title: "Nombre total de tickets non resolus", count: "415"},
  ]


  statTicket: ModelStatUsage[] = [
    {metrique: "Nombre de tickets en cours du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "156", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_encours', unite: 'tickets'},
    {metrique: "Nombre de tickets affectes du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "150", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_affecte', unite: 'tickets'},
    {metrique: "Nombre de tickets resolus du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "250", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_resolu', unite: 'tickets'},
    {metrique: "Nombre de tickets non resolus du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "120", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_non_resolu', unite: 'tickets'},
    {metrique: "Nombre de tickets affectes du jour", entite: "Iviplay", os: "Android", date:new Date("2023-12-19"), mesure: "105", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_affecte', unite: 'tickets'},
    {metrique: "Nombre de tickets resolus du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "100", usager: '', selected: false, terminal: '', codeDesc: 'nb_ticket_resolu', unite: 'tickets'},
  ]

  cardSatisfaction: ModelCardFlux[] = [
    {image: 'enquete_transmise', title: "Nombre total d'enquetes transmises'", count: "603"},
    {image: 'enquete_transmise', title: "Nombre d'enquetes transmises du jour", count: "26"},
    {image: 'enquete_retourne', title: "Nombre total d'enquetes retournees", count: "501"},
    {image: 'enquete_retourne', title: "Nombre d'enquetes retournees du jour", count: "20"},
    {image: 'note_satisfaction', title: "Note moyenne par critere de satisfaction", count: "9/10"},
  ]

  statSatisfaction: ModelStatUsage[] = [
    {metrique: "Nombre d'enquetes transmises du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "156", usager: '', selected: false, terminal: '', codeDesc: 'nb_enquete_transmise', unite: 'enquetes'},
    {metrique: "Nombre d'enquetes retournees du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20") , mesure: "150", usager: '', selected: false, terminal: '', codeDesc: 'nb_enquete_retourne', unite: 'enquetes'},
    {metrique: "Note moyenne du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "07", usager: '', selected: false, terminal: '', codeDesc: 'note_moyenne', unite: '/10'},
  ]

  cardRessource: ModelCardFlux[] = [
    {image: 'nb_maintener', title: "Nombre total de mainteneurs references'", count: "25"},
    {image: 'nb_maintener_connectes', title: "Nombre de mainteneurs connectes", count: "17"},
  ]

  statRessource: ModelStatUsage[] = [
    {metrique: "Nombre de mainteneurs connectes du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-21"), mesure: "15", usager: '', selected: false, terminal: '', codeDesc: 'nb_mainteneur_connecte', unite: 'mainteneurs'},
    {metrique: "Nombre de mainteneurs connectes du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-20"), mesure: "25", usager: '', selected: false, terminal: '', codeDesc: 'nb_mainteneur_connecte', unite: 'mainteneurs'},
    {metrique: "Nombre de mainteneurs connectes du jour", entite: "Iviplay", os: "Android", date: new Date("2023-12-19"), mesure: "10", usager: '', selected: false, terminal: '', codeDesc: 'nb_mainteneur_connecte', unite: 'mainteneurs'},
  ]

  descriptifStats: ModelDescriptif[] = [
    //******POST******//
    {code: 'nb_post', content: "Le nombre de posts dans un fil d'actualité mesure l'engagement et la connectivité. Mesuré en unités, il dynamise la communication interne. Plus le nombre est élevé, plus l'échange d'informations est dynamique. Interprétation directe : un fil actif stimule la collaboration. Enrichissez votre expérience de travail avec une connectivité exceptionnelle dès maintenant."},
    {code: 'nb_like', content: "Le nombre de likes par post mesure l'impact des publications dans le fil d'actualité. Mesuré en unités, il évalue l'engagement. Plus le nombre de likes est élevé, plus le contenu est apprécié. Interprétation claire : des likes nombreux indiquent une communication positive et renforcent la visibilité. Valorisez votre interaction dès maintenant."},
    {code: 'nb_comment', content: "Le nombre de commentaires par post mesure l'engagement interactif dans le fil d'actualité. Mesuré en unités, il dynamise la communication. Plus le nombre de commentaires est élevé, plus le dialogue est actif. Interprétation directe : des commentaires nombreux enrichissent la conversation, favorisent l'échange d'idées et renforcent la communauté. Participez activement dès maintenant."},
    {code: 'nb_partage', content: "Le nombre de partages par post mesure l'influence du contenu dans le fil d'actualité. Mesuré en unités, il amplifie la portée. Plus le nombre de partages est élevé, plus le message se propage. Interprétation évidente : des partages nombreux étendent votre impact, favorisant une visibilité maximale. Augmentez votre influence dès maintenant."},
    {code: 'nb_favoris', content: "Le nombre de mises en favoris par post mesure l'appréciation du contenu dans le fil d'actualité. En unités, il personnalise l'expérience. Plus le nombre est élevé, plus le contenu est important aux yeux de l'usager. Interprétation directe : des favoris nombreux signifient une valeur durable, améliorant la pertinence et la satisfaction. Marquez votre expérience dès maintenant."},

    {code: 'co', content: "La statistique de CO² mesure l'empreinte carbone d'un bâtiment, cruciale pour une gestion durable. Indicateur clé dans notre application, elle évalue l'impact environnemental. Une valeur basse signifie une empreinte minimale. Interprétation simple : plus c'est bas, plus c'est écologique. Agissez pour un avenir plus vert dès maintenant."},
    {code: 'humidite', content: "La statistique d'humidité mesure l'équilibre atmosphérique du bâtiment. En pourcentage, elle assure un climat adapté. Maintenez un niveau bas pour un confort optimal. Interprétation claire : moins d'humidité, plus de bien-être. Transformez votre espace en une véritable oasis dès aujourd'hui."},
    {code: 'temperature', content: "La statistique de température mesure le climat ambiant du bâtiment. En degrés Celsius, elle garantit un confort optimal. Maintenez une valeur adaptée pour une productivité maximale. Interprétation simple : plus c'est confortable, plus vous performez. Transformez votre espace en un lieu de travail idéal dès maintenant."},
    {code: 'luminosite', content: "La statistique de luminosité mesure la clarté ambiante dans le bâtiment. En lux, elle optimise le confort visuel. Maintenez des valeurs élevées pour une ambiance dynamique. Interprétation évidente : plus de luminosité, plus d'efficacité. Transformez votre espace en un environnement brillamment productif dès aujourd'hui."},
    {code: 'bruit', content: "La statistique de bruit mesurée en décibels évalue l'environnement sonore d'un bâtiment. Garantissant un lieu de travail paisible, une valeur basse indique une ambiance calme. Interprétation facile : moins de bruit, plus de productivité. Transformez votre espace en havre de paix dès maintenant."},
    //******USAGE***********//
    {code: 'nb_download', content: "La statistique du nombre de téléchargements unitaires mesure la popularité de l'application. Mesurée en unités, elle indique l'engagement des utilisateurs par le téléchargement réel de l'application. Plus le nombre est élevé, plus l'application est téléchargée et appréciée. Interprétation directe : une utilité confirmée par des téléchargements massifs. Valorisez votre expérience dès maintenant."},
    {code: 'nb_inscrit', content: "La statistique du nombre d'inscription mesure la popularité de l'application. Mesurée en unités, elle indique l'engagement des utilisateurs par le souhait de disposer de l'application. Plus le nombre est élevé, plus l'application est demandée et appréciée. Interprétation directe : une utilité confirmée par des inscriptions massives. Valorisez votre expérience dès maintenant."},
    {code: 'nb_connect', content: "La statistique du nombre de connexions mesure la popularité de l'application. Mesurée en unités, elle indique l'engagement des utilisateurs par le souhait de d'accéder à l'application. Plus le nombre est élevé, plus l'application est sollicitée et appréciée. Interprétation directe : une utilité confirmée par des connexions massives. Valorisez votre expérience dès maintenant."},
    {code: 'nb_activation', content: "La statistique du nombre d'activations mesure la popularité de l'application. Mesurée en unités, elle indique l'engagement des utilisateurs par le souhait de d'utiliser activement l'application. Plus le nombre est élevé, plus l'application est réellement utilisée et appréciée. Interprétation directe : une utilité confirmée par des utilisations massives. Valorisez votre expérience dès maintenant."},
    {code: 'nb_activation', content: "La statistique du nombre d'activations mesure la popularité de l'application. Mesurée en unités, elle indique l'engagement des utilisateurs par le souhait de d'utiliser activement l'application. Plus le nombre est élevé, plus l'application est réellement utilisée et appréciée. Interprétation directe : une utilité confirmée par des utilisations massives. Valorisez votre expérience dès maintenant."},
    {code: 'duree_activation', content: "La statistique de la durée d'activation mesure le degré d'usage de l'application. Mesurée en heures, elle indique l'engagement des utilisateurs par le souhait d'utiliser activement l'application. Plus le nombre est élevé, plus l'application est réellement utilisée et appréciée. Interprétation directe : une utilité confirmée par des utilisations dans la durée. Valorisez votre expérience dès maintenant."},
    {code: 'duree_veille', content: "La statistique de la durée de veille mesure le degré d'usage de l'application en arrière plan. Mesurée en heures, elle indique l'engagement des utilisateurs par le souhait d'utiliser continuellement l'application. Plus le nombre est élevé, plus l'application est utilisée et appréciée dans la durée. Interprétation directe : une utilité confirmée par des utilisations dans la durée. Valorisez votre expérience dès maintenant."},
    {code: 'jr_utilisation', content: "La statistique du nombre de jours d'utilisation mesure le degré d'usage de l'application dans le temps. Mesurée en jours, elle indique l'engagement des utilisateurs par le souhait d'utiliser durablement l'application. Plus le nombre est élevé, plus l'application est utilisée et appréciée dans la durée. Interprétation directe : une utilité confirmée par des utilisations dans le temps. Valorisez votre expérience dès maintenant."},
    {code: 'nb_change', content: "La statistique du nombre de changement de modes d'affichage mesure la diversité d'usage de l'application dans le temps. Mesurée en nombre de clics, elle indique l'engagement des utilisateurs par le souhait d'utiliser l'application de manière diversifiée. Plus le nombre est élevé, plus l'application est utilisée et appréciée pour sa richesse fonctionnelle. Interprétation directe : une utilité confirmée par des utilisations variées. Valorisez votre expérience dès maintenant."},
    {code: 'nb_ouverture', content: "La statistique du nombre d'ouvertures de services mesure la diversité d'usage de l'application dans le temps. Mesurée en nombre de clics par services, elle indique l'engagement des utilisateurs par le souhait d'utiliser l'application de manière diversifiée. Plus le nombre est élevé, plus l'application est utilisée et appréciée pour sa richesse fonctionnelle. Interprétation directe : une utilité confirmée par des utilisations variées. Valorisez votre expérience dès maintenant."},
    {code: 'nb_service', content: "La statistique du nombre de services actifs mesure la diversité d'usage de l'application et son évolution dans le temps. Mesurée en nombre de services activés, elle indique l'engagement des administrateurs par le souhait de fournir une richesse fonctionnelle. Plus le nombre est élevé, plus l'application est variée et fonctionnellement riche. Interprétation directe : une utilité confirmée par des évolutions régulières. Valorisez votre expérience dès maintenant."},
    {code: 'nb_abonne', content: "La statistique du nombre d'abonnés par services mesure le degré d'usage de l'application dans le temps. Mesurée en unités, elle indique l'engagement des utilisateurs par le souhait d'utiliser l'application de manière variée, et confirme l'attrait pour les fonctionnalités activées. Plus le nombre est élevé, plus l'application est utilisée et appréciée dans la durée. Interprétation directe : une utilité confirmée par des utilisations massive et variée des services. Valorisez votre expérience dès maintenant."},
    {code: 'nb_notif', content: "La statistique du nombre de notification mesure le degré d'interaction entre l'usager et l'application dans le temps. Mesurée en unités, elle indique la qualité de l'interaction entre la plateforme de gestion et les utilisateurs, et confirme l'attrait pour les fonctionnalités activées. Plus le nombre est élevé, plus l'application est utilisée et appréciée dans la durée. Interprétation directe : une utilité confirmée par des utilisations massive et variée des services. Valorisez votre expérience dès maintenant."},
    //******MISSION***********//
    {code: 'duree_affectation', content: "La durée moyenne d'affectation d'un ticket d'incident mesure le temps moyen pour assigner une résolution. En heures, elle optimise la réactivité. Une durée courte indique une allocation rapide. Interprétation directe : moins de temps moyen d'affectation, plus d'efficacité. Améliorez votre expérience avec une prise en charge prompte dès maintenant."},
    {code: 'duree_intervention', content: "La durée d'intervention pour un ticket d'incident mesure l'efficacité de résolution. En heures, elle garantit une réponse rapide. Une durée courte indique une résolution rapide. Interprétation directe : moins de temps d'intervention, plus de satisfaction. Assurez une résolution rapide et efficace pour une expérience optimale dès maintenant."},
    {code: 'duree_resolution', content: "La durée de résolution d'un ticket d'incident mesure l'efficacité du service. En heures, elle garantit une résolution rapide. Une durée courte indique une gestion efficiente des incidents. Interprétation directe : moins de temps de résolution, plus de satisfaction. Optimisez votre expérience en assurant une résolution prompte et fiable dès maintenant."},
    {code: 'duree_enquete', content: "La durée d'enquête de satisfaction pour un ticket d'incident mesure le temps dédié à évaluer votre expérience. En heures, elle optimise le recueil d'avis. Une durée courte favorise une rétroaction rapide. Interprétation directe : moins de temps d'enquête, plus d'efficacité. Participez activement à l'amélioration continue dès maintenant."},
    {code: 'duree_prise_charge', content: "La durée totale moyenne de prise en charge d'un ticket d'incident mesure le temps moyen pour résoudre une problématique de manière complète. En heures, elle assure une gestion intégrale et rapide. Une durée courte indique une efficacité optimale. Interprétation directe : moins de temps moyen de prise en charge, plus de satisfaction. Optez pour une résolution rapide et intégrale dès maintenant."},
    {code: 'duree_validation', content: "La durée moyenne de validation d'un ticket d'incident mesure le temps moyen pour confirmer une résolution. En heures, elle optimise l'efficacité du processus. Une durée courte indique une validation rapide. Interprétation directe : moins de temps moyen de validation, plus de réactivité. Améliorez votre expérience avec une confirmation rapide dès maintenant."},
    {code: 'nb_ticket_encours', content: "Le nombre de tickets d'incident en cours de traitement mesure l'activité du support. En unités, il indique le volume actuel de demandes. Plus le nombre est bas, plus la gestion est efficiente. Interprétation directe : moins de tickets en cours, plus de réactivité. Bénéficiez d'une assistance rapide dès maintenant."},
    {code: 'nb_ticket_affecte', content: "Le nombre de tickets d'incident affectés mesure la distribution des demandes au sein de l'équipe de support. En unités, il optimise l'équité de la prise en charge. Plus le nombre est équilibré, plus la gestion est efficace. Interprétation directe : une répartition harmonieuse assure une assistance équitable et rapide. Profitez d'un support équilibré dès maintenant."},
    {code: 'nb_ticket_resolu', content: "Le nombre de tickets d'incident résolus mesure l'efficacité du support. En unités, il quantifie les problèmes résolus. Plus le nombre est élevé, plus la satisfaction est garantie. Interprétation directe : plus de tickets résolus, plus de tranquillité. Bénéficiez d'une résolution rapide et fiable pour une expérience optimale dès maintenant."},
    {code: 'nb_ticket_non_resolu', content: "Le nombre de tickets d'incident non résolus mesure les problématiques en attente de résolution. En unités, il identifie les défis en cours. Plus le nombre est bas, plus la gestion est efficace. Interprétation directe : moins de tickets non résolus, plus de réactivité. Assurez-vous une assistance rapide et complète dès maintenant."},
    {code: 'nb_enquete_transmise', content: "Le nombre d'enquêtes de satisfaction transmises mesure l'engagement pour évaluer l'expérience utilisateur. En unités, il quantifie les retours. Plus le nombre est élevé, plus la participation est active. Interprétation directe : plus d'enquêtes transmises, plus de données, favorisant une amélioration continue. Participez activement à l'évolution dès maintenant."},
    {code: 'nb_enquete_retourne', content: "Le nombre d'enquêtes de satisfaction retournées mesure l'engagement des utilisateurs dans l'évaluation de leur expérience. En unités, il quantifie les réponses collectées. Plus le nombre est élevé, plus la participation est active. Interprétation directe : plus d'enquêtes retournées, plus de retours, favorisant une amélioration continue. Participez activement à l'évolution dès maintenant."},
    {code: 'note_moyenne', content: "La note moyenne d'enquêtes de satisfaction retournées évalue la qualité perçue de l'expérience utilisateur. Mesurée sur une échelle, elle quantifie la satisfaction. Une note élevée indique une expérience positive. Interprétation directe : une moyenne élevée reflète un niveau de satisfaction global élevé. Bénéficiez d'une expérience positive dès maintenant."},
    {code: 'nb_mainteneur_connecte', content: "Le nombre de mainteneurs disponibles mesure la disponibilité des professionnels pour vos besoins. En unités, il quantifie les experts accessibles. Plus le nombre est élevé, plus vous avez d'options. Interprétation directe : une disponibilité accrue offre une réponse rapide et efficace à vos demandes de maintenance. Choisissez l'accessibilité des compétences dès maintenant."},
    //********FLUX*******//
    {code: 'micro_localisation_espace', content: "Le nombre de micro-localisation par espace répertorie la fréquentation pour chaque espace, par les usagers. En unités, elle quantifie le nombre de passage dans un espace fréquenté. Plus le nombre est étendu, plus votre espace est utilisé. Interprétation directe : une utilisation massive justifie l'utilité des locaux. Choisissez l'optimisation de la fréquentation des locaux dès maintenant."},
    {code: 'micro_localisation_equipement', content: "Le nombre de micro-localisation par espace répertorie la fréquentation pour chaque espace, par les usagers. En unités, elle quantifie le nombre de passage dans un espace fréquenté. Plus le nombre est étendu, plus votre espace est utilisé. Interprétation directe : une utilisation massive justifie l'utilité des locaux. Choisissez l'optimisation de la fréquentation des locaux dès maintenant."},
    {code: 'detection_espace', content: "Le nombre de détection de proximité par espace répertorie la fréquentation pour chaque espace, par les usagers. En unités, elle quantifie le nombre de passage dans un espace fréquenté. Plus le nombre est étendu, plus votre espace est utilisé. Interprétation directe : une utilisation massive justifie l'utilité des locaux. Choisissez l'optimisation de la fréquentation des locaux dès maintenant."},
    {code: 'detection_equipement', content: "Le nombre de détection de proximité par espace répertorie la fréquentation pour chaque espace, par les usagers. En unités, elle quantifie le nombre de passage dans un espace fréquenté. Plus le nombre est étendu, plus votre espace est utilisé. Interprétation directe : une utilisation massive justifie l'utilité des locaux. Choisissez l'optimisation de la fréquentation des locaux dès maintenant."},
    {code: 'nb_geofencing', content: "Le nombre de geofencing par espace répertorie la fréquentation pour chaque espace, par les usagers. En unités, elle quantifie le nombre de passage dans un espace fréquenté. Plus le nombre est étendu, plus votre espace est utilisé. Interprétation directe : une utilisation massive justifie l'utilité des locaux. Choisissez l'optimisation de la fréquentation des locaux dès maintenant."},
    {code: 'frequentation', content: "La statistique de fréquentation d'un espace disponible mesure l'activité et l'attrait. Mesurée en unités, elle quantifie la popularité de l'espace. Plus la fréquentation est élevée, plus l'espace est prisé. Interprétation directe : une fréquentation élevée garantit un environnement dynamique et attractif. Profitez d'espaces animés dès maintenant."},

  ]

  //******************VERSION*************************//
  dataTableVersion: ModelTableVersion[] = [
    {nom: "PMU", versionApp: "1.0.2", os: "IOS", versionOS: "9.5", marque: "Iphone 11 pro", maj: new Date("2024-01-13"), lastConnexion: new Date(), lastDeconnexion: new Date(), changeVersion: true, env: "Developpement"},
    {nom: "Bienvenue", versionApp: "1.0.2", os: "IOS", versionOS: "9.5", marque: "Iphone 11 pro", maj: new Date("2024-01-13"), lastConnexion: new Date(), lastDeconnexion: new Date(), changeVersion: true, env: "Developpement"},
    {nom: "Ledger", versionApp: "1.0.2", os: "IOS", versionOS: "9.5", marque: "Iphone 11 pro", maj: new Date("2024-01-13"), lastConnexion: new Date(), lastDeconnexion: new Date(), changeVersion: true, env: "production"},
    {nom: "Vyv", versionApp: "1.0.2", os: "IOS", versionOS: "9.5", marque: "Iphone 11 pro", maj: new Date("2024-01-13"), lastConnexion: new Date(), lastDeconnexion: new Date(), changeVersion: true, env: "Developpement"},
    {nom: "Voyage", versionApp: "1.0.2", os: "IOS", versionOS: "9.5", marque: "Iphone 11 pro", maj: new Date("2024-01-13"), lastConnexion: new Date(), lastDeconnexion: new Date(), changeVersion: true, env: "production"},
  ]

  logInscription: ModelLogInscription[] = [
    {app: "PMU", prenom: "ALice", nom: "Perrot", email: "alice.perrot@pmu.fr", domaine: "pmu.fr", societe: "pmu", entite: "pmu", inscritAt: new Date("2023-02-13"), isEdit: false},
    {app: "PMU", prenom: "Lucie", nom: "Durant", email: "lucie.durant@pmu.fr", domaine: "pmu.fr", societe: "pmu", entite: "pmu", inscritAt: new Date("2023-02-25"), isEdit: false},
    {app: "PMU", prenom: "Marc", nom: "Lascaux", email: "mrc.lascaux@pmu.fr", domaine: "pmu.fr", societe: "pmu", entite: "pmu", inscritAt: new Date("2023-03-10"), isEdit: false},
    {app: "FNCH", prenom: "Achile", nom: "Doutie", email: "achile.doutie@fnch.fr", domaine: "fnch.fr", societe: "SCI", entite: "fnch", inscritAt: new Date("2023-04-13"), isEdit: false},
    {app: "France-galop", prenom: "Nicolas", nom: "Jackson", email: "nicolas@france-galop.fr", domaine: "france-galop.fr", societe: "SCI", entite: "france-galop", inscritAt: new Date("2024-01-05"), isEdit: false},
    {app: "PMU", prenom: "Alain", nom: "Bouetou", email: "alain@pmu.fr", domaine: "pmu.fr", societe: "pmu", entite: "pmu", inscritAt: new Date("2023-08-15"), isEdit: false},
    {app: "FNCH", prenom: "Charlotte", nom: "Picois", email: "charlot.picois@fnch.fr", domaine: "fnch.fr", societe: "SCI", entite: "fnch", inscritAt: new Date("2023-12-23"), isEdit: false},
  ]

  champsFormulaire: ModelChampFormulaire[] = [
    {nom: "Nom", statut: true, isEdite: false, oldValue: "", oldStatut: true},
    {nom: "Prenom", statut: true, isEdite: false, oldValue: "", oldStatut: true},
    {nom: "Adresse email", statut: true, isEdite: false, oldValue: "", oldStatut: true},
    {nom: "Nom de domaine", statut: true, isEdite: false, oldValue: "", oldStatut: true},
    {nom: "Societe", statut: true, isEdite: false, oldValue: "", oldStatut: true},
    {nom: "Entite", statut: true, isEdite: false, oldValue: "", oldStatut: true},
  ]
  constructor() { }
}
