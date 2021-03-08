import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RegistroService } from '../../../services/registro.service';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TablaRegistrosComponent implements OnInit {
  page = 0;
  pageSize = 10;
  registro: any[] = [];
  loading = true;
  formato = 1000 * 60 * 60 * 24;
  constructor(public nav: NavbarService, private _CONDICIONES1SERVICE: RegistroService) {
    this._CONDICIONES1SERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.registro = data;
      }, 0);
    });
  }
  ngOnInit() {
    this.nav.show();
  }
  borrarInvocador( key$: string) {
    this._CONDICIONES1SERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.registro[key$];
      }
    });
  }
}
