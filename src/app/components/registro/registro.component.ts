import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Registros } from '../../interfaces/registros';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroComponent implements OnInit {
  key: any;
  error = false;
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  cond1: Registros = {
    nombre: '',
    sugerencia: '',
    fechaIngreso: '',
  };
  // FECHA
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  jstoday = '';
  // tslint:disable-next-line:max-line-length
  constructor(public nav: NavbarService, private _CONDICIONSERVICES: RegistroService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.jstoday = '' + this.today;
    this.activatedRoute.params.subscribe( parametros => {
      console.log(this.jstoday);
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        console.log('2');
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(cond1 => this.cond1 = cond1);
      }
    });
  }

  ngOnInit() {
    this.nav.hide();
    this.cond1.fechaIngreso = this.jstoday;
  }
  guardar() {
    this.key = this.cond1.nombre.toUpperCase();
    // tslint:disable-next-line:max-line-length
    if ( this.key === 'AURORA' || this.key === 'CARLOSBER' || this.key === 'JOHNGOMEZ' || this.key === 'JEANMA' || this.key === 'MILTONGUERRERO' || this.key === 'ANDRESC' || this.key === 'KAROL' || this.key === 'NANA' || this.key === 'MAMANO') {
      if ( this.id === 'nuevo' ) {
        this._CONDICIONSERVICES.nuevoInvocador(this.cond1 ).subscribe(data => {
          this.router.navigate(['/home']);
        },
        error => console.error(error));
      } else {
        this._CONDICIONSERVICES.actualizarInvocador( this.cond1, this.id ).subscribe(data => {
          this.router.navigate(['/home']);
        },
        error => console.error(error));
      }
    } else {
      this.error = true;
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/registro', 'nuevo']);
    forma.reset({});
  }
}
