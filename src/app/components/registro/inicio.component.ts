import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { PeliculaBdService, Peliculas } from '../../services/pelicula-bd.service';
import { PeliculaDvdripBdService, Series } from '../../services/pelicula-dvdrip-bd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  page = 0;
  pageSize = 10;
  pageB = 0;
  pageSizeB = 10;
  peliculas: Peliculas[] = [];
  series: Series[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, public nav: NavbarService, private peliculaService: PeliculaBdService, private serieService: PeliculaDvdripBdService, private router: Router) {
    /*
    const options = {
      enableHighAccuracy: false,
      timeout: 6000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition( success, error, options );
    function success(position) {
      const coordenadas = position.coords;
      console.log('Tu posición actual es:');
      console.log('Latitud : ' + coordenadas.latitude);
      console.log('Longitud: ' + coordenadas.longitude);
      console.log('Más o menos ' + coordenadas.accuracy + ' metros.');
    }
    function error(error) {
      console.warn('ERROR(' + error.code + '): ' + error.message);
    }
    const watchId = navigator.geolocation.watchPosition( success, error, options );
    navigator.geolocation.clearWatch( watchId );*/
  }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
    this.series = this.serieService.getPeliculas();
    this.nav.hide();
  }

}
