import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeliculaMarvelBdService } from '../../services/pelicula-marvel-bd.service';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-buscador-marvel',
  templateUrl: './buscador-marvel.component.html',
  styleUrls: ['./buscador-marvel.component.css']
})
export class BuscadorMarvelComponent implements OnInit {
  closeResult: string;
  peliculas: any[] = [];
  termino: string;

  // tslint:disable-next-line:max-line-length
  constructor(public nav: NavbarService , private modalService: NgbModal, private activatedRoute: ActivatedRoute, private peliculaService: PeliculaMarvelBdService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      this.termino = params[ 'termino' ];
      // tslint:disable-next-line:no-string-literal
      this.peliculas = this.peliculaService.buscarPeliculas( params['termino'] );
      console.log( this.peliculas );
    });
    this.nav.show();

  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
