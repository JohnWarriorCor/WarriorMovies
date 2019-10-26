import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TarjetaPeliculasComponent } from './components/tarjeta-peliculas/tarjeta-peliculas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PeliculasComponent,
    TarjetaPeliculasComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
