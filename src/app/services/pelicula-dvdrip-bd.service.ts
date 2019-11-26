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
      drive: ['1KEhUh5BjNJYeCLpauRB-RvIzaArksmnM/preview', '1n4diSZroVN1LMoSSEBejbLamh14Aa5E9/preview', '1tIDl4cRUdXyEu5eZFzY5vIIziYlvyTD7/preview', '1oC6ascgdzijBRYhRMmfq2OJo7gDWkUn9/preview', '1Mr0xbBhWVgDwUJ2KY21EmMw_b8--s6sa/preview', '1UCH_vpTR7Je8eCfcVAax8rqiPDzsU6a6/preview', '1vPIlaWIkyD41qlkGjsYtMLKKWpzRqfY4/preview', '1tAu-pgnGcnIN7MpkgMKENz0BCcSdNsXh/preview', '1_zGsc6ZebzktAgFu5j1stuPec546ypLh/preview', '1mn2rMbFhclRw4b1ImhqDz3zjjDAIDvu3/preview', '17CgguEv8ig0mE7SO3ju-HxJEl_U9rKjn/preview', '17x2w6BscCfifWg4jA35Wpqawf59Lp4Ff/preview', '1eMEErht-jpCrdZ5EACprAljGsYfMmDG5/preview', '1g6lbGcX4iER2pLXaX5SJSxNVQ096AI-q/preview', '1uNeq3XKKDfpmxW-H92H0QTmz3SMut_7U/preview', '13f0mqXB8ZtBCIqPEH1Bn8JgimXIOBVq0/preview', '1KOVmxuiluDbHy0hQHWlhF1Og9gAcmJAD/preview']
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
    {
      idx : 2,
      titulo: 'La casa de papel temporada 1 y 2',
      short: 'La casa de papel temporada 1 y 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un grupo de ladrones únicos asalta la Fábrica de Moneda y Timbre para llevar a cabo el robo más perfecto en la historia de España y llevarse a casa 2.400 millones de euros.',
      img: 'assets/lcp1.jpg',
      fecha: '2017-05-02',
      trailer: 'nJ0Jik9Tokk',
      // tslint:disable-next-line:max-line-length
      drive: ['13g6XJNF69cvy_lDteTTno6Hmp3t1eE3w/preview', '1258NbVc72aqp2ieubx0dhHfkzTsfxyCg/preview', '145FKvvaVOaNDvaHayBrqwYLkp3xeitpn/preview', '1sf8o35n5DgEY1BswuzqmcW0nKjSiJP9v/preview', '1Kxk3NZXWf3bBJljKrtoMcfTkrudiy-n-/preview', '1U43mPP7u3BOkMjyDFEl5HyNd6wM-_jR-/preview', '1hUs3dutmNzeQWW0mzHwG6CkXflpFcqfc/preview', '16RhLkqLJ8RV3GHqT9hZAq_PU25sR_Vsq/preview', '1FQSKHBsYOs7nHViiVXqcaDM6-0v34zo7/preview', '1qXOHhsthUAgrWejn7YzbHT_YDGcDde24/preview', '1hejc2TdPmqDbR242fCXJoWQkOikKqTiq/preview', '1ZFrlcFWPcxDos7cwI8pa7ZOXA58Vo-xc/preview', '1MvsVpmhVKh4Ty3UscRBiXSmRXeAxEy3y/preview', '1-UE6aRhWxA46ftmha-vsEkr3NA3yy4NV/preview', '1yre6GNlGpsnPVEVVJAmTKCwlsX5IDhAx/preview']
    },
    {
      idx : 3,
      titulo: 'La casa de papel temporada 3',
      short: 'La casa de papel temporada 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un grupo de ladrones únicos asalta la Fábrica de Moneda y Timbre para llevar a cabo el robo más perfecto en la historia de España y llevarse a casa 2.400 millones de euros.',
      img: 'assets/lcp3.jpg',
      fecha: '2019-07-19',
      trailer: 'xQ3XC81uxLQ',
      // tslint:disable-next-line:max-line-length
      drive: ['1UStnAtU8kZmnZMNLmXDhxx2-z5GOu-gr/preview', '1LOqaV8w-bdtNCw7KasIyvJ0xxcTuK0tw/preview', '1d0M3Ru7xqe9elLv-YJ-SI-9FQZfYegWb/preview', '1f2w0CSWSrF0vq4OVZMUajkvfLyDLeY-4/preview', '1Wu_UBYpCD37Om1H4PkAy6qe3iTDsEwZV/preview', '1BF7oU0qHsItKYtDJuhxGcBmKUsCzRDCa/preview', '1zzcm2gBDOiJsWRcyjzlouiuaWAJ9LINy/preview', '1Bcxp75qvfJl_h3uLHgUji476dM-PYUqT/preview']
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
