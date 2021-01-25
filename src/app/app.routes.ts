import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MarvelHomeComponent } from './components/home/marvel-home.component';
import { MarvelComponent } from './components/peliculas/marvel.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BuscadorDVDComponent } from './components/buscador/buscador-dvd.component';
import { BuscadorMarvelComponent } from './components/buscador/buscador-marvel.component';
import { DvdripComponent } from './components/peliculas/dvdrip.component';
import { DvdripHomeComponent } from './components/home/dvdrip-home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaRegistrosComponent } from './components/registro/tabla-registros.component';
import { InicioComponent } from './components/registro/inicio.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 't', component: TablaRegistrosComponent },
    { path: 'marvelHome', component: MarvelHomeComponent },
    { path: 'dvdHome', component: DvdripHomeComponent },
    { path: 'pelicula/:id', component: PeliculasComponent },
    { path: 'marvel/:id', component: MarvelComponent },
    { path: 'dvd/:id', component: DvdripComponent },
    { path: 'buscarHd/:termino', component: BuscadorComponent },
    { path: 'buscarMarvel/:termino', component: BuscadorMarvelComponent },
    { path: 'buscarDvd/:termino', component: BuscadorDVDComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});
