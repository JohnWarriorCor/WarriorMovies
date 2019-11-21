import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaMarvelBdService, Peliculas } from '../../services/pelicula-marvel-bd.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelHomeComponent implements OnInit {

  peliculas: Peliculas[] = [];

  // tslint:disable-next-line:max-line-length
  constructor( public nav: NavbarService, private modalService: NgbModal, private peliculaService: PeliculaMarvelBdService, private router: Router) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
    this.nav.show();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }
  verPelicula( idx: number ) {
    this.router.navigate(['/peliculaMarvel', idx]);
  }
  buscarPelicula( termino: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarMarvel', termino] );
  }
  up() {
    window.scroll(0, 0);
  }
}
