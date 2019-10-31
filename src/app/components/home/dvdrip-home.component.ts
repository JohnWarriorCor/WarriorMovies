import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaDvdripBdService, Peliculas } from '../../services/pelicula-dvdrip-bd.service';

@Component({
  selector: 'app-dvdrip-home',
  templateUrl: './dvdrip-home.component.html',
  styleUrls: ['./dvdrip-home.component.css']
})
export class DvdripHomeComponent implements OnInit {

  peliculas: Peliculas[] = [];

  constructor( private peliculaService: PeliculaDvdripBdService, private router: Router) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  verPelicula( idx: number ) {
    this.router.navigate(['/dvd', idx]);
  }
  buscarPelicula( termino: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarDvd', termino] );
  }
  up() {
    window.scroll(0, 0);
  }

}
