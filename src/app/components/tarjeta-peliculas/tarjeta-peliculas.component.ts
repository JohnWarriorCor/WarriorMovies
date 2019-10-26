import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-peliculas',
  templateUrl: './tarjeta-peliculas.component.html',
  styleUrls: ['./tarjeta-peliculas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaPeliculasComponent {
  @Input() pelicula: any = {};
  @Input() index: number;
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }
  verPelicula() {
    this.router.navigate(['/pelicula', this.index]);
  }

}
