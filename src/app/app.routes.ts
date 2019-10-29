import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MarvelHomeComponent } from './components/home/marvel-home.component';
import { MarvelComponent } from './components/peliculas/marvel.component';






const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'marvelHome', component: MarvelHomeComponent },
    { path: 'pelicula/:id', component: PeliculasComponent },
    { path: 'marvel/:id', component: MarvelComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});
