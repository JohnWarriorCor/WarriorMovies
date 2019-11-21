import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaBdService } from '../../services/pelicula-bd.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscadorComponent implements OnInit {
  closeResult: string;
  peliculas: any[] = [];
  termino: string;
  page = 1;
  pageSize = 6;
  // tslint:disable-next-line:max-line-length
  constructor(public nav: NavbarService, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private peliculaService: PeliculaBdService) { }

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
