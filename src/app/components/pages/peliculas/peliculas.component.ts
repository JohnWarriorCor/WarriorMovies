import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliculaBdService, Peliculas } from '../../../services/pelicula-bd.service';
import { DatePipe } from '@angular/common';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from '../../../interfaces/pelicula';
import { PeliculaService } from '../../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [DatePipe]
})
export class PeliculasComponent implements OnInit {

  today = new Date();
  fecha: any;
  closeResult: string;
  defaultImgUrl: any;
  urlimg: any;
  war: any;
  modalReference: any;
  error = false;
  passError = '';
  imgError = '';
  alertBool = false;
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  pelicula: Pelicula = {
    titulo: '',
    tituloResumido: '',
    sinopsis: '',
    puntuacion: 0,
    img: '',
    fecha: '',
    trailer: '',
    drive: '',
    calidad: '',
  };
  vistaEdicion = false;
  acumFechas = 0;
  comodinAcum = 0;
  loading = true;
  peliculas: any = {};
  link: any;

  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, public auth: AngularFireAuth, public datepipe: DatePipe, private modalService: NgbModal, private peliculaService: PeliculaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.peliculas = this.peliculaService.getPelicula(params.id);
      this.link = params.id;
    });
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this.peliculaService.getPelicula( this.id ).subscribe(pelicula => this.pelicula = pelicula);
      }
    });
  }
  elementoEliminado() {
    this.toastr.warning( '', 'Elemento eliminado', {
      timeOut: 2500
    });
  }
  showDanger() {
    this.toastr.error('Intenten nuevamente', 'Error', {
      timeOut: 2500
    });
  }

  ngOnInit() {
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
  }
  verPelicula( idx: number ) {
    this.router.navigate(['/pelicula', idx]);
  }
  up() {
    window.scroll(0, 0);
  }
}
