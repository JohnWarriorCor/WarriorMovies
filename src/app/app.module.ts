import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PeliculasComponent } from './components/pages/peliculas/peliculas.component';
import { TarjetaPeliculasComponent } from './components/pages/tarjeta-peliculas/tarjeta-peliculas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { MarvelTarjetaComponent } from './components/pages/tarjeta-peliculas/marvel-tarjeta.component';
import { MarvelHomeComponent } from './components/home/marvel-home.component';
import { MarvelComponent } from './components/pages/peliculas/marvel.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DvdripHomeComponent } from './components/home/dvdrip-home.component';
import { DvdripComponent } from './components/pages/peliculas/dvdrip.component';
import { TarjetaDvdripComponent } from './components/pages/tarjeta-peliculas/tarjeta-dvdrip.component';
import { BuscadorMarvelComponent } from './components/buscador/buscador-marvel.component';
import { BuscadorDVDComponent } from './components/buscador/buscador-dvd.component';
import { InvertirPipe } from './pipes/invertir.pipe';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { TablaRegistrosComponent } from './components/pages/registro/tabla-registros.component';
import { NavbarService } from './services/navbar.service';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/pages/registro/inicio.component';
import { KeysPipe } from './pipes/keys.pipe';
import { PeliculaBdService } from './services/pelicula-bd.service';
import { RegistroService } from './services/registro.service';
import { PeliculaDvdripBdService } from './services/pelicula-dvdrip-bd.service';
import { PeliculaMarvelBdService } from './services/pelicula-marvel-bd.service';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ProfileComponent } from './components/admin/profile/profile.component';

// Toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import localeEsCO from '@angular/common/locales/es-CO';
// Autenticacion Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule  } from '@angular/fire/auth-guard';
import { registerLocaleData } from '@angular/common';
import { PeliculaeditComponent } from './components/admin/peliculaedit/peliculaedit.component';
// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEsCO, 'es-CO');

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PeliculasComponent,
    TarjetaPeliculasComponent,
    DomseguroPipe,
    MarvelTarjetaComponent,
    MarvelHomeComponent,
    MarvelComponent,
    BuscadorComponent,
    DvdripHomeComponent,
    DvdripComponent,
    TarjetaDvdripComponent,
    BuscadorMarvelComponent,
    BuscadorDVDComponent,
    InvertirPipe,
    RegistroComponent,
    TablaRegistrosComponent,
    InicioComponent,
    KeysPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PeliculaeditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularEditorModule,
    AppRoutes,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
