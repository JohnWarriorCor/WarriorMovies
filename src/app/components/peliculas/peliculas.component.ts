import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliculaBdService, Peliculas } from '../../services/pelicula-bd.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula: any = {};
  peliculas: Peliculas[] = [];

  constructor( private activatedRoute: ActivatedRoute, private peliculaService: PeliculaBdService, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.pelicula = this.peliculaService.getPelicula(params.id);
    });
  }
  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }
  verPelicula( idx: number ) {
    this.router.navigate(['/pelicula', idx]);
  }
  up() {
    window.scroll(0, 0);
  }
}
