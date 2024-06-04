import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplashComponent} from "./splash/splash.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ActualiteComponent} from "./actualite/actualite.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {MeteoComponent} from "./meteo/meteo.component";
import {TransportComponent} from "./transport/transport.component";
import {ConstatComponent} from "./constat/constat.component";
import {CartographieComponent} from "./cartographie/cartographie.component";
import {SettingComponent} from "./setting/setting.component";
import {RestaurationComponent} from "./restauration/restauration.component";
import {CseComponent} from "./cse/cse.component";
import {QuartierComponent} from "./quartier/quartier.component";
import {IntranetComponent} from "./intranet/intranet.component";
import {SsoComponent} from "./sso/sso.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {StatistiqueComponent} from "./statistique/statistique.component";
import {StatUsageComponent} from "./statistique/stat-usage/stat-usage.component";
import {StatFluxComponent} from "./statistique/stat-flux/stat-flux.component";
import {StatActuComponent} from "./statistique/stat-actu/stat-actu.component";
import {StatMetierComponent} from "./statistique/stat-metier/stat-metier.component";
import {AuthentificationComponent} from "./plateforme/authentification/authentification.component";
import {DroitComponent} from "./plateforme/droit/droit.component";
import {SupportComponent} from "./plateforme/support/support.component";
import {UtilisateurComponent} from "./plateforme/utilisateur/utilisateur.component";
import {StatEnvironnementComponent} from "./statistique/stat-environnement/stat-environnement.component";
import {ControleAccesComponent} from "./statistique/controle-acces/controle-acces.component";
import {StatReservationComponent} from "./statistique/stat-reservation/stat-reservation.component";
import {ModelPageComponent} from "./statistique/model-page/model-page.component";
import {VersionComponent} from "./fonctionnalite-mobile/version/version.component";
import {ConnexionComponent} from "./fonctionnalite-mobile/connexion/connexion.component";
import {InscriptionGestionComponent} from "./fonctionnalite-mobile/inscription/inscription.component";

const routes: Routes = [
  {path: '1', component: SplashComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: '', component: DashboardComponent},
  {path: 'actualite', component: ActualiteComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'restauration', component: RestaurationComponent},
  {path: 'meteo', component: MeteoComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'incidents', component: ConstatComponent},
  {path: 'cartographie', component: CartographieComponent},
  {path: 'parametres', component: SettingComponent},
  {path: 'cse', component: CseComponent},
  {path: 'quartier', component: QuartierComponent},
  {path: 'intranet', component: IntranetComponent},
  {path: 'login-sso', component: SsoComponent},
  {path: 'statistique', component: StatistiqueComponent},
  //{path: 'statistique/usage', component: StatUsageComponent},
  //{path: 'statistique/flux', component: StatFluxComponent},
  //{path: 'statistique/actualite', component: StatActuComponent},
  //{path: 'statistique/environnenment', component: StatMetierComponent},
  //{path: 'statistique/environnement', component: StatEnvironnementComponent},
  {path: 'statistique/controle-acces', component: ControleAccesComponent},
  {path: 'statistique/reservation', component: StatReservationComponent},
  {path: 'gestion/authentification', component: AuthentificationComponent},
  {path: 'gestion/droit', component: DroitComponent},
  {path: 'gestion/support', component: SupportComponent},
  {path: 'gestion/utilisateurs', component: UtilisateurComponent},
  {path: 'statistique/:model', component: ModelPageComponent},
  {path: 'fonctionnalite/version', component: VersionComponent},
  {path: 'fonctionnalite/connexion', component: ConnexionComponent},
  {path: 'fonctionnalite/inscription', component: InscriptionGestionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
