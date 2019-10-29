import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaMarvelBdService, Peliculas } from '../../services/pelicula-marvel-bd.service';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {

  peliculas: Peliculas[] = [];

  constructor( private peliculaService: PeliculaMarvelBdService, private router: Router) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  verPelicula( idx: number ) {
    this.router.navigate(['/peliculaMarvel', idx]);
  }

}
