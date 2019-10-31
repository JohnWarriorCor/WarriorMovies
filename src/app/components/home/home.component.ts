import { Component, OnInit } from '@angular/core';
import { PeliculaBdService, Peliculas } from '../../services/pelicula-bd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: Peliculas[] = [];

  constructor( private peliculaService: PeliculaBdService, private router: Router) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  verPelicula( idx: number ) {
    this.router.navigate(['/pelicula', idx]);
  }
  buscarPelicula( termino: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarHd', termino] );
  }
  up() {
    window.scroll(0, 0);
  }
}
