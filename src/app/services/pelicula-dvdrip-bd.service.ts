import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaDvdripBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'Bumblebee',
      short: 'Bumblebee',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En Cybertron, los Autobots, liderados por Optimus Prime, están a punto de perder la Gran Guerra Cybertroniana ante sus enemigos, los Decepticons, y comienzan a hacer preparativos para abandonar el planeta. Los Decepticons liderados por Shockwave, Soundwave y Starscream los emboscan durante la evacuación, y Optimus envía a un joven explorador, B-127, a la Tierra para establecer una base de operaciones donde los Autobots puedan reagruparse. El B-127 llega a la Tierra solo en 1987, aterriza de manera forzada en California e interrumpe un ejercicio de entrenamiento que realiza el Sector 7, una agencia secreta del gobierno que monitorea la actividad extraterrestre en la Tierra. El agente del sector 7, el coronel Jack Burns, presume que B-127 es un invasor hostil y ataca, conduciendo a B-127 al bosque, donde es emboscado por el Decepticon Blitzwing. Cuando B-127 se niega a revelar el paradero de Optimus, Blitzwing arranca rencorosamente su caja de voz y daña su núcleo de memoria. B-127 logra destruir Blitzwing antes de colapsar de sus heridas. Antes de entrar en estasis, ...',
      img: 'assets/bb.jpg',
      fecha: '2018-12-28',
      trailer: '1qokthe74c-Ng9uGe9xljTyQw526UZnPS/preview',
      drive: '1n5iONfl04dClBibO-kgpbYk-7CqY2hUR/preview'
    },
    {
      idx : 1,
      titulo: 'AMERICAN PIE 8',
      short: 'AMERICAN PIE: EL REENCUENTRO',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Ha pasado más de una década y la pandilla regresó a East Great Falls, Michigan, para el fin de semana. Descubrirán cómo se han desarrollado sus vidas a medida que se reúnen para su reunión de secundaria. ¿Cómo ha tratado la vida a Michelle, Jim, Heather, Oz, Kevin, Vicky, Finch, Stifler y la madre de Stifler? En el verano de 1999, fueron cuatro niños en una búsqueda para perder su virginidad. Ahora Kara es una linda estudiante de secundaria que busca al chico perfecto para perder su virginidad.',
      img: 'assets/amp8.jpg',
      fecha: '2012-04-04',
      trailer: '1b4LYXfKZ42U-2bqTYj74xrhdWiI2arxW/preview',
      drive: '1Qd24XSf9DaBlcD2wmMajWy9vTbu6IDDZ/preview'
    },
    {
      idx : 2,
      titulo: 'Belleza oculta',
      short: 'Belleza inesperada',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Cuando un exitoso ejecutivo de publicidad de Nueva York sufre una gran tragedia, se retira de la vida. Mientras sus amigos preocupados intentan desesperadamente volver a conectarse con él, él busca respuestas del universo escribiendo cartas a Amor, Tiempo y Muerte. Pero no es hasta que sus notas traen respuestas personales inesperadas que comienza a comprender cómo estas constantes se entrelazan en una vida plenamente vivida, y cómo incluso la pérdida más profunda puede revelar momentos de significado y belleza.',
      img: 'assets/bi.jpg',
      fecha: '2016-12-23',
      trailer: '1xLaxGabmS_0BP240lP34L47UpDSdj6aZ/preview',
      drive: '1nOnaC2aQ6qKDMSzpvie9cz7NuFDHPA2f/preview'
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
  drive: string;
}
