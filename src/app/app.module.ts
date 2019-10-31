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
    BuscadorDVDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
