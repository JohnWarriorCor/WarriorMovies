import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tarjeta-peliculas',
  templateUrl: './tarjeta-peliculas.component.html',
  styleUrls: ['./tarjeta-peliculas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaPeliculasComponent {
  closeResult: string;
  @Input() pelicula: any = {};
  @Input() index: number;
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor(private modalService: NgbModal, private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }
  verPelicula() {
    this.router.navigate(['/pelicula', this.index]);
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal', centered: true });
  }
}
