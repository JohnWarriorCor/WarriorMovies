import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tarjeta-dvdrip',
  templateUrl: './tarjeta-dvdrip.component.html',
  styleUrls: ['./tarjeta-dvdrip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaDvdripComponent {
  closeResult: string;
  @Input() pelicula: any = {};
  @Input() index: number;
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor(private modalService: NgbModal, private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal', centered: true });
  }
  verPelicula() {
    this.router.navigate(['/dvd', this.index]);
  }

}
