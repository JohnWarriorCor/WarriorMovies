import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDvdripBdService } from '../../services/pelicula-dvdrip-bd.service';

@Component({
  selector: 'app-dvdrip',
  templateUrl: './dvdrip.component.html',
  styleUrls: ['./dvdrip.component.css']
})
export class DvdripComponent {

  pelicula: any = {};

  constructor( private activatedRoute: ActivatedRoute, private peliculaService: PeliculaDvdripBdService) {
    this.activatedRoute.params.subscribe( params => {
      this.pelicula = this.peliculaService.getPelicula(params.id);
    });
  }
  up() {
    window.scroll(0, 0);
  }

}
