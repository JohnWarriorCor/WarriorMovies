import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaMarvelBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'Capitan América',
      short: 'Capitán América: El primer vengador',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El abogado Luke Hobbs y el marginado Deckard Shaw forman una alianza improbable cuando un villano cibernéticamente mejorado amenaza el futuro de la humanidad.',
      img: 'assets/marvel1.jpg',
      fecha: '2011-07-05',
      trailer: 'JerVrbLldXw',
      drive: '1uf95izu_qOVrxYH-EH3T_WyF4lEZ6xs0/preview'
    },
    {
      idx : 1,
      titulo: 'Iron man',
      short: 'iron man',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Tony Stark Genio, multimillonario, playboy, filántropo. Hijo del legendario inventor y contratista de armas Howard Stark. Cuando se le asigna a Tony Stark una presentación de armas a una unidad iraquí dirigida por el teniente coronel James Rhodes, se le da un paseo en las líneas enemigas. Ese viaje termina mal cuando el Humvee de Stark en el que viaja está atacado por combatientes enemigos. Sobrevive, apenas, con un cofre lleno de metralla y una batería de automóvil unida a su corazón. Para sobrevivir, se le ocurre una forma de miniaturizar la batería y descubre que la batería puede alimentar algo más. Así nace Iron Man. Utiliza el dispositivo primitivo para escapar de la cueva en Iraq. Una vez en casa, comienza a trabajar para perfeccionar el traje de Iron Man. Pero el hombre que fue puesto a cargo de Stark Industries tiene sus propios planes para hacerse cargo de Tony',
      img: 'assets/marvel2.jpg',
      fecha: '2008-04-30',
      trailer: '8hYlB38asDY',
      drive: '1zV_Eiv1otSiDIrur9uuRGJSdhUEwfIca/preview'
    },
    {
      idx : 2,
      titulo: 'hulk',
      short: 'El increíble Hulk',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Representando los eventos después de la Bomba Gamma.The Incredible Hulk cuenta la historia del Dr. Bruce Banner, quien busca una cura para su condición única, lo que lo convierte en un monstruo verde gigante bajo estrés emocional. Mientras huye del ejército que busca su captura, Banner se acerca a una cura. Pero todo se pierde cuando emerge una nueva criatura; La abominación.',
      img: 'assets/marvel3.jpg',
      fecha: '2008-06-20',
      trailer: 'xbqNb2PFKKA',
      drive: '1NjP63VFuMrvt1L4TNfqxByAlJkWCcrzD/preview'
    },
    {
      idx : 3,
      titulo: 'iron man 2',
      short: 'iron man 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La historia comienza cuando el detective Harry Goodman desaparece misteriosamente, lo que lleva a su hijo Tim de 21 años a averiguar qué sucedió. Ayudando en la investigación está el antiguo compañero Pokémon de Harry, el Detective Pikachu: un súper detective adorable, hilarante y sabio que es un misterio incluso para sí mismo. Al descubrir que están equipados de manera única para comunicarse entre sí, Tim y Pikachu unen fuerzas en una emocionante aventura para desentrañar el misterio enredado. Persiguiendo pistas por las calles iluminadas con neón de Ryme City, una metrópolis moderna y extensa donde los humanos y los Pokémon viven codo con codo en un mundo hiperrealista de acción en vivo, se encuentran con un elenco diverso de personajes Pokémon y descubren un impactante trama que podría destruir esta coexistencia pacífica y amenazar a todo el universo Pokémon.',
      img: 'assets/marvel4.jpg',
      fecha: '2019-04-10',
      trailer: 'qsRZghNciIo',
      drive: '1G42nyFMT0iAmUJh2mGLwIkPlMyVXJNv9/preview'
    },
    {
      idx : 4,
      titulo: 'thor 1',
      short: 'thor 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Woody, Buzz Lightyear y el resto de la pandilla se embarcan en un viaje por carretera con Bonnie y un nuevo juguete llamado Forky. El viaje aventurero se convierte en una reunión inesperada cuando el pequeño desvío de Woody lo lleva a su amigo Bo Peep, perdido hace mucho tiempo. Mientras Woody y Bo discuten los viejos tiempos, pronto comienzan a darse cuenta de que están separados por dos mundos cuando se trata de lo que quieren de la vida como un juguete.',
      img: 'assets/marvel5.jpg',
      fecha: '2019-06-21',
      trailer: 'JOddp-nlNvQ',
      drive: '19f1BqlNMe186Hb5CnbkZYZ8KLaRNMMMv/preview'
    },
    {
      idx : 5,
      titulo: 'los vengadores 1',
      short: 'los vengadores',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel6.jpg',
      fecha: '2019-03-29',
      trailer: 'yNXfOOL8824',
      drive: '1kxQOm61s5fHV7nPdXi9DKbHLGG-XENWm/preview'
    },
    {
      idx : 6,
      titulo: 'iron man 3',
      short: 'iron man 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel7.jpg',
      fecha: '2019-03-29',
      trailer: 'bKWvs_yCT6c',
      drive: '1YcCP2C3jkNSLFi2K6orTM7HSbpFAXGMQ/preview'
    },
    {
      idx : 7,
      titulo: 'thor 2',
      short: 'thor 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel8.jpg',
      fecha: '2019-03-29',
      trailer: 'jmVa1kNDnWA',
      drive: '1_tMrmoGmu5mfvbemO16iybg9m4aqYdGG/preview'
    },
    {
      idx : 8,
      titulo: 'capitan américa 2',
      short: 'capitan américa y el soldado del invierno',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel9.jpg',
      fecha: '2019-03-29',
      trailer: 'FmXjNGVpXUc',
      drive: '1se-ua1jczOrLwzLNRWvRThlj-ogqS9YB/preview'
    },
    {
      idx : 9,
      titulo: 'gdg vol1',
      short: 'guardianes de la galaxia',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel10.jpg',
      fecha: '2019-03-29',
      trailer: 'qdIuXCfUKM8',
      drive: '1zfPhTdTrNlshm8cXbrqI2Nc-oVPM9wdA/preview'
    },
    {
      idx : 10,
      titulo: 'los vengadores 2',
      short: 'los vengadores la era de ultron',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel11.jpg',
      fecha: '2019-03-29',
      trailer: 'DMFBm_lp4rU',
      drive: '19VjBHK9l7Ar0ji577rX6_NDel9CEO0T_/preview'
    },
    {
      idx : 11,
      titulo: 'ant-man',
      short: 'ant-man',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel12.jpg',
      fecha: '2019-03-29',
      trailer: '42h1BHPf0ag',
      drive: '1JsB09gJEVnVa-J8CmMZKbWAA7vrRi4kc/preview'
    },
    {
      idx : 12,
      titulo: 'capitan américa 3',
      short: 'capitan américa civil war',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel13.jpg',
      fecha: '2019-03-29',
      trailer: '3TDaN6KOUf8',
      drive: '18wuiTXsAP56AxaYgp0t_VGfyYlI7TKFl/preview'
    },
    {
      idx : 13,
      titulo: 'spiderman 1',
      short: 'spiderman home comming',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel14.jpg',
      fecha: '2019-03-29',
      trailer: 'tmgXOlOEkfo',
      drive: ''
    },
    {
      idx : 14,
      titulo: 'black panther',
      short: 'black panther',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel15.jpg',
      fecha: '2019-03-29',
      trailer: 'JcIye2DaZwI',
      drive: '1n74BWybyav2j5ss9t31Ja3FVsz9jgfiM/preview'
    },
    {
      idx : 15,
      titulo: 'doctor strange',
      short: 'doctor strange',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel16.jpg',
      fecha: '2019-03-29',
      trailer: 'ingOz2WNFjw',
      drive: '1SLsaTgX8-sAkZ9X8sxS-mdneLg1fQAnn/preview'
    },
    {
      idx : 16,
      titulo: 'gdg vol2',
      short: 'guardianes de la galaxia vol2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel17.jpg',
      fecha: '2019-03-29',
      trailer: 'fCPEpGpem3I',
      drive: ''
    },
    {
      idx : 17,
      titulo: 'thor 3',
      short: 'thor un mundo oscuro',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel18.jpg',
      fecha: '2019-03-29',
      trailer: '6fdK9bTM7ig',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 18,
      titulo: 'ant-man 2',
      short: 'ant-man and the wasp',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel19.jpg',
      fecha: '2019-03-29',
      trailer: '1xdCWAagZfw',
      drive: '14WMYYj0T4JYCPkdTYV48cvvRt16ADDk6/preview'
    },
    {
      idx : 19,
      titulo: 'avengers 3',
      short: 'avengers infinity war',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel20.jpg',
      fecha: '2019-03-29',
      trailer: '823iAZOEKt8',
      drive: '1LyVOcImRuAut34OpAQNkCcjXav8taW8V/preview'
    },
    {
      idx : 20,
      titulo: 'capitana marvel',
      short: 'capitana marvel',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel21.jpg',
      fecha: '2019-03-29',
      trailer: '6XkN-MFNZpI',
      drive: '1TKL4teHpkc5BCTFdZ93gFji6dUVbH7sQ/preview'
    },
    {
      idx : 21,
      titulo: 'avengers end game',
      short: 'avengers end game',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/marvel22.jpg',
      fecha: '2019-03-29',
      trailer: 'znk2OICHbjY',
      drive: '1YUjZqFv-81LYY4ZjRgY0ZTtYFZum2cjY/preview'
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

