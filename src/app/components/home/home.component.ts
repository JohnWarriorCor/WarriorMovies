import { Component, OnInit } from '@angular/core';
import { PeliculaBdService, Peliculas } from '../../services/pelicula-bd.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'firebase/auth';
import firebase from '@firebase/app';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  pageSize = 6;
  peliculas: Peliculas[] = [];

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:no-shadowed-variable
  constructor( public auth: AngularFireAuth, public nav: NavbarService, private peliculaService: PeliculaBdService, private router: Router) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
    this.nav.show();
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
