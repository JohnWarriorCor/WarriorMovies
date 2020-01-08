import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { Registros } from '../interfaces/registros';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  condicionRegistroURL = 'https://anonimomovies-1c361.firebaseio.com/visitantes.json';
  condicionURL = 'https://anonimomovies-1c361.firebaseio.com/visitantes/';
  constructor( private http: Http) { }

  nuevoInvocador( regis: Registros) {
    const body = JSON.stringify(regis);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarInvocador( reg: Registros, key$: string ) {
    const body = JSON.stringify(reg);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getInvocador(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getInvocadores() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarInvocador( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
