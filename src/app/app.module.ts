import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TarjetaPeliculasComponent } from './components/tarjeta-peliculas/tarjeta-peliculas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MarvelTarjetaComponent } from './components/tarjeta-peliculas/marvel-tarjeta.component';
import { MarvelHomeComponent } from './components/home/marvel-home.component';
import { MarvelComponent } from './components/peliculas/marvel.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DvdripHomeComponent } from './components/home/dvdrip-home.component';
import { DvdripComponent } from './components/peliculas/dvdrip.component';
import { TarjetaDvdripComponent } from './components/tarjeta-peliculas/tarjeta-dvdrip.component';
import { BuscadorMarvelComponent } from './components/buscador/buscador-marvel.component';
import { BuscadorDVDComponent } from './components/buscador/buscador-dvd.component';
import { InvertirPipe } from './pipes/invertir.pipe';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaRegistrosComponent } from './components/registro/tabla-registros.component';
import { NavbarService } from './services/navbar.service';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { InicioComponent } from './components/registro/inicio.component';
import { KeysPipe } from './pipes/keys.pipe';
import { PeliculaBdService } from './services/pelicula-bd.service';
import { RegistroService } from './services/registro.service';
import { PeliculaDvdripBdService } from './services/pelicula-dvdrip-bd.service';
import { PeliculaMarvelBdService } from './services/pelicula-marvel-bd.service';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ProfileComponent } from './components/admin/profile/profile.component';


import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule  } from '@angular/fire/auth-guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PeliculasComponent,
    TarjetaPeliculasComponent,
    DomseguroPipe,
    NavbarComponent,
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,



    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  providers: [
    NavbarService,
    PeliculaBdService,
    RegistroService,
    PeliculaDvdripBdService,
    PeliculaMarvelBdService
  ],
  // providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
