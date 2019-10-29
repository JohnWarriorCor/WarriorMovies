import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marvel-tarjeta',
  templateUrl: './marvel-tarjeta.component.html',
  styleUrls: ['./marvel-tarjeta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelTarjetaComponent {

  @Input() pelicula: any = {};
  @Input() index: number;
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }
  verPelicula2() {
    this.router.navigate(['/marvel', this.index]);
  }

}
