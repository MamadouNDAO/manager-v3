import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './shared/menu/menu.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ActualiteComponent } from './actualite/actualite.component';
import { ReservationComponent } from './reservation/reservation.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ConstatComponent } from './constat/constat.component';
import { MeteoComponent } from './meteo/meteo.component';
import { TransportComponent } from './transport/transport.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { SettingComponent } from './setting/setting.component';
import { RestaurationComponent } from './restauration/restauration.component';
import { QuartierComponent } from './quartier/quartier.component';
import { CseComponent } from './cse/cse.component';
import { IntranetComponent } from './intranet/intranet.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import { SsoComponent } from './sso/sso.component';
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./services/interceptor";
import {RelativeDatePipe} from "./services/mypipedate";
import {TableSortPipe} from "./services/tableSort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTabsModule} from "@angular/material/tabs";
import { InscriptionComponent } from './inscription/inscription.component';
import {DatePipe} from "@angular/common";
import { ToastComponent } from './shared/toast/toast.component';
import {NgxFileDragDropModule} from "ngx-file-drag-drop";
import { UploadDirective } from './constat/upload.directive';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AlarmeComponent } from './dashboard/alarme/alarme.component';
import { InterventionComponent } from './dashboard/intervention/intervention.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SursiteComponent } from './dashboard/sursite/sursite.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StatUsageComponent } from './statistique/stat-usage/stat-usage.component';
import { StatFluxComponent } from './statistique/stat-flux/stat-flux.component';
import { StatActuComponent } from './statistique/stat-actu/stat-actu.component';
import { StatMetierComponent } from './statistique/stat-metier/stat-metier.component';
import { DataActuComponent } from './statistique/stat-actu/data-actu/data-actu.component';
import { DataMetierComponent } from './statistique/stat-metier/data-metier/data-metier.component';
import { AuthentificationComponent } from './plateforme/authentification/authentification.component';
import { SupportComponent } from './plateforme/support/support.component';
import { UtilisateurComponent } from './plateforme/utilisateur/utilisateur.component';
import { DroitComponent } from './plateforme/droit/droit.component';
import { MetricActuComponent } from './dashboard/metric-actu/metric-actu.component';
import { MetricServiceComponent } from './dashboard/metric-service/metric-service.component';
import { SqueletteComponent } from './dashboard/squelette/squelette.component';
import {StatEnvironnementComponent} from "./statistique/stat-environnement/stat-environnement.component";
import { ControleAccesComponent } from './statistique/controle-acces/controle-acces.component';
import { StatReservationComponent } from './statistique/stat-reservation/stat-reservation.component';
import { DataReservationComponent } from './statistique/stat-reservation/data-reservation/data-reservation.component';
import { ModelPageComponent } from './statistique/model-page/model-page.component';
import { VersionComponent } from './fonctionnalite-mobile/version/version.component';
import { ConnexionComponent } from './fonctionnalite-mobile/connexion/connexion.component';
import {InscriptionGestionComponent} from "./fonctionnalite-mobile/inscription/inscription.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    ActualiteComponent,
    ReservationComponent,
    ConstatComponent,
    MeteoComponent,
    TransportComponent,
    CartographieComponent,
    SettingComponent,
    RestaurationComponent,
    QuartierComponent,
    CseComponent,
    IntranetComponent,
    SsoComponent,
    RelativeDatePipe,
    TableSortPipe,
    InscriptionComponent,
    ToastComponent,
    UploadDirective,
    AlarmeComponent,
    InterventionComponent,
    NotificationComponent,
    SursiteComponent,
    StatistiqueComponent,
    StatUsageComponent,
    StatFluxComponent,
    StatActuComponent,
    StatMetierComponent,
    DataActuComponent,
    DataMetierComponent,
    AuthentificationComponent,
    SupportComponent,
    UtilisateurComponent,
    DroitComponent,
    MetricActuComponent,
    MetricServiceComponent,
    SqueletteComponent,
    StatEnvironnementComponent,
    ControleAccesComponent,
    StatReservationComponent,
    DataReservationComponent,
    ModelPageComponent,
    VersionComponent,
    ConnexionComponent,
    InscriptionGestionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatExpansionModule,
        FormsModule,
        NgxPaginationModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        HttpClientModule,
        MatFormFieldModule,
        MatChipsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatTabsModule,
        NgxFileDragDropModule,
        MatTooltipModule
    ],
  providers: [authInterceptorProviders, DatePipe, ToastComponent,
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
