import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaDvdripBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'The big bang theory temporada 1',
      short: 'The big bang theory temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt1.jpg',
      fecha: '2007-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1KEhUh5BjNJYeCLpauRB-RvIzaArksmnM/preview', '1n4diSZroVN1LMoSSEBejbLamh14Aa5E9/preview', '1tIDl4cRUdXyEu5eZFzY5vIIziYlvyTD7/preview', '1oC6ascgdzijBRYhRMmfq2OJo7gDWkUn9/preview', '1Mr0xbBhWVgDwUJ2KY21EmMw_b8--s6sa/preview']
    },
    {
      idx : 1,
      titulo: 'The Mandalorian Temporada 1',
      short: 'The Mandalorian Temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. El Mandaloriano se establece después de la caída del Imperio y antes de la aparición de la Primera Orden. Seguimos las tribulaciones de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.',
      img: 'assets/mando.jpg',
      fecha: '2019-11-12',
      trailer: 'XmI7WKrAtqs',
      // tslint:disable-next-line:max-line-length
      drive: ['19ITj3xgT3J2-dQoGxLloa2VU7COdfm1s/preview', '15hiXV3e4u1JFv4AOu0nKg37yaHp21j-C/preview', '17U9cJzJAqVW7tqWJ4ex9L-BFGwvnvFXY/preview']
    },
  ];
  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  getPelicula( idx: string ) {
    return this.peliculas[idx];
  }
  buscarPeliculas( termino: string ): Peliculas[] {

    const peliculaArr: Peliculas[] = [];
    termino = termino.toLowerCase();

    for ( const pelicula of this.peliculas ) {

      const titulo = pelicula.short.toLowerCase();

      if ( titulo.indexOf( termino ) >= 0  ) {
        peliculaArr.push( pelicula );
      }

    }

    return peliculaArr;

  }
}
export interface Peliculas {
  idx?: number;
  short: string;
  titulo: string;
  sinopsis: string;
  img: string;
  fecha: string;
  trailer: string;
  drive: string [];
}
