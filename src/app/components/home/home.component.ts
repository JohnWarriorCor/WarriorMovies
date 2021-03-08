import { Component, OnInit } from '@angular/core';
import { PeliculaBdService, Peliculas } from '../../services/pelicula-bd.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'firebase/auth';
import firebase from '@firebase/app';
import { NavbarService } from '../../services/navbar.service';
import { PeliculaService } from '../../services/pelicula.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  pageSize = 6;
  peliculas: any;

  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, private modalService: NgbModal, private peliculaService: PeliculaService, private router: Router) {}
  get sortData() {
    return this.peliculas.sort((a, b) => {
      // tslint:disable-next-line:whitespace
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      return <any> new Date(b.fecha) - <any> new Date(a.fecha);
    });
  }
  obtenerPeliculas(): void {
    this.peliculaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.peliculas = data;
    });
  }
  ngOnInit() {
    this.obtenerPeliculas();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal', centered: true });
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
