import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TarjetaPeliculasComponent } from './components/tarjeta-peliculas/tarjeta-peliculas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});
