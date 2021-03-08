import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from '../../../interfaces/pelicula';
import { PeliculaService } from '../../../services/pelicula.service';


@Component({
  selector: 'app-peliculaedit',
  templateUrl: './peliculaedit.component.html',
  styleUrls: ['./peliculaedit.component.css'],
  providers: [DatePipe]
})
export class PeliculaeditComponent implements OnInit {
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

  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, public auth: AngularFireAuth, public datepipe: DatePipe, private modalService: NgbModal, private peliculaServices: PeliculaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this.peliculaServices.getPelicula( this.id ).subscribe(pelicula => this.pelicula = pelicula);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Acción exitosa', 'Elemento guardado', {
      timeOut: 2500
    });
  }
  showDanger() {
    this.toastr.error('Intenten nuevamente', 'Error al guardar', {
      timeOut: 2500
    });
  }
  showInfo() {
    this.toastr.info( '', 'Elemento actualizado', {
      timeOut: 2500
    });
  }
  imgChange() {
    this.toastr.info( '', 'Imagen cambiada con éxito', {
      timeOut: 2500
    });
  }
  imgNone() {
    this.toastr.error('No puede dejar un evento sin imagen, por favor inserte un URL correspondiente', 'Error', {
      timeOut: 2500
    });
  }
  showWarning() {
    this.toastr.warning( 'Intenten nuevamente', 'Error al actualizar', {
      timeOut: 2500
    });
  }
  elementoAgregado() {
    this.toastr.info( '', 'Elemento agregado', {
      timeOut: 2500
    });
  }
  elementoEliminado() {
    this.toastr.warning( '', 'Elemento eliminado', {
      timeOut: 2500
    });
  }

  ngOnInit() {
    this.war = this.pelicula.titulo;
    if ( this.pelicula.img === null || this.pelicula.img === '' ) {
      // tslint:disable-next-line:max-line-length
      this.defaultImgUrl = 'https://firebasestorage.googleapis.com/v0/b/johnwarriormovies.appspot.com/o/prueba.jpg?alt=media&token=f38ea2dc-9710-4926-ba0f-7f6db6242290';
      this.pelicula.img = this.defaultImgUrl;
      return this.pelicula.img;
    }
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
  }

  openModal(confirmar) {
    this.modalReference = this.modalService.open(confirmar, { centered: true, size: 'sm', backdrop: 'static', windowClass: 'fade-in'});
  }

  changeImg(urlimg) {
    console.log(urlimg);
    // tslint:disable-next-line:max-line-length
    if (urlimg === '' || urlimg === null) {
      this.defaultImgUrl = urlimg;
      this.alertBool = true;
      this.imgNone();
    } else {
      this.alertBool = false;
      this.defaultImgUrl = urlimg;
      this.imgChange();
      return this.defaultImgUrl;
    }
  }

  guardar() {
    if ( this.pelicula.titulo !== this.war ||  this.pelicula.titulo !== this.war ) {
      this.error = false;
      this.modalReference.close();
      if ( this.id === 'nuevo' ) {
        this.peliculaServices.nuevoPelicula( this.pelicula ).subscribe(data => {
          this.showSuccess();
          this.router.navigate(['/inicio']);
          this.modalReference.close();
        },
        error => console.error(error, this.showDanger()));
      } else {
        this.modalReference.close();
        this.peliculaServices.actualizarPelicula( this.pelicula, this.id ).subscribe(data => {
          this.showInfo();
          this.router.navigate(['/inicio']);
          this.modalReference.close();
        },
        error => console.error(error, this.showWarning()));
      }
    } else {
      this.error = true;
      this.passError = 'Formulario incompleto.';
      this.modalReference.close();
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/admi_pelicula', 'nuevo']);
    forma.reset({});
  }
}
