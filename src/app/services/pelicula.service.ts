import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  peliculaRegistroURL = 'https://johnwarriormovies.firebaseio.com/peliculas.json';
  peliculaURL = 'https://johnwarriormovies.firebaseio.com/peliculas/';
  private dbPath = '/peliculas';
  peliculaRef: AngularFireList<Pelicula> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.peliculaRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Pelicula> {
    return this.peliculaRef;
  }
  nuevoPelicula( pelicula: Pelicula) {
    const body = JSON.stringify(pelicula);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.peliculaRegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarPelicula( pelicula: Pelicula, key$: string ) {
    const body = JSON.stringify(pelicula);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.peliculaURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getPelicula(key$: string) {
    const url = `${ this.peliculaURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getPeliculas() {
    return this.http.get( this.peliculaRegistroURL ).pipe(map(res => res.json()));
  }
  borrarPelicula( key$: string) {
    const url = `${ this.peliculaURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
