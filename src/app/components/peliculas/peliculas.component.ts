import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaBdService } from '../../services/pelicula-bd.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  pelicula: any = {};

  constructor( private activatedRoute: ActivatedRoute, private peliculaService: PeliculaBdService) {
    this.activatedRoute.params.subscribe( params => {
      this.pelicula = this.peliculaService.getPelicula(params.id);
    });
  }
  up() {
    window.scroll(0, 0);
  }
}
