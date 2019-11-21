import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public nav: NavbarService) { }

  ngOnInit() {
  }
  buscarPelicula1( termino1: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarHd', termino1] );
  }
  buscarPelicula2( termino2: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarMarvel', termino2] );
  }
  buscarPelicula3( termino3: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscarDvd', termino3] );
  }
}
