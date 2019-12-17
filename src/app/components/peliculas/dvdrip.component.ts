import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliculaDvdripBdService, Peliculas } from '../../services/pelicula-dvdrip-bd.service';

@Component({
  selector: 'app-dvdrip',
  templateUrl: './dvdrip.component.html',
  styleUrls: ['./dvdrip.component.css']
})
export class DvdripComponent implements OnInit {

  pelicula: any = {};
  peliculas: Peliculas[] = [];

  constructor( private activatedRoute: ActivatedRoute, private peliculaService: PeliculaDvdripBdService, private router: Router) {
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
