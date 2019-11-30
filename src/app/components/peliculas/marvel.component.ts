import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaMarvelBdService } from '../../services/pelicula-marvel-bd.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent {

  pelicula: any = {};
  constructor( private activatedRoute: ActivatedRoute, private peliculaService: PeliculaMarvelBdService) {
    this.activatedRoute.params.subscribe( params => {
      this.pelicula = this.peliculaService.getPelicula(params.id);
    });
  }
}
