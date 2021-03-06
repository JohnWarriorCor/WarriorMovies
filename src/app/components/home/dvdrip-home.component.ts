import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaDvdripBdService, Series } from '../../services/pelicula-dvdrip-bd.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-dvdrip-home',
  templateUrl: './dvdrip-home.component.html',
  styleUrls: ['./dvdrip-home.component.css']
})
export class DvdripHomeComponent implements OnInit {
  page = 1;
  pageSize = 6;

  peliculas: Series[] = [];

  constructor(public nav: NavbarService, private peliculaService: PeliculaDvdripBdService, private router: Router) { }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
    this.nav.show();
  }

  verPelicula(idx: number) {
    this.router.navigate(['/dvd', idx]);
  }
  buscarPelicula(termino: string) {
    // console.log(termino);
    this.router.navigate(['/buscarDvd', termino]);
  }
  up() {
    window.scroll(0, 0);
  }

}
