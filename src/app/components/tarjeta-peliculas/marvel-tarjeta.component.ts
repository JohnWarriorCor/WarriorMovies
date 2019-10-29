import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marvel-tarjeta',
  templateUrl: './marvel-tarjeta.component.html',
  styleUrls: ['./marvel-tarjeta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelTarjetaComponent {
  closeResult: string;
  @Input() pelicula: any = {};
  @Input() index: number;
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor(private modalService: NgbModal, private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }
  verPelicula2() {
    this.router.navigate(['/marvel', this.index]);
  }

}
