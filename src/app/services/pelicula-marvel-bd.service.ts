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
      trailer: '1VH7gyZvuvJlHUG_AyFShJLExqRi8JSyf/preview',
      drive: '1_GG_1Ee05d2H82E3lUPLbBvx8ypcfSrs/preview'
    },
    {
      idx : 1,
      titulo: 'thor 2',
      short: 'thor 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 2,
      titulo: 'black panther',
      short: 'black panther',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 3,
      titulo: 'iron man 2',
      short: 'iron man 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La historia comienza cuando el detective Harry Goodman desaparece misteriosamente, lo que lleva a su hijo Tim de 21 años a averiguar qué sucedió. Ayudando en la investigación está el antiguo compañero Pokémon de Harry, el Detective Pikachu: un súper detective adorable, hilarante y sabio que es un misterio incluso para sí mismo. Al descubrir que están equipados de manera única para comunicarse entre sí, Tim y Pikachu unen fuerzas en una emocionante aventura para desentrañar el misterio enredado. Persiguiendo pistas por las calles iluminadas con neón de Ryme City, una metrópolis moderna y extensa donde los humanos y los Pokémon viven codo con codo en un mundo hiperrealista de acción en vivo, se encuentran con un elenco diverso de personajes Pokémon y descubren un impactante trama que podría destruir esta coexistencia pacífica y amenazar a todo el universo Pokémon.',
      img: 'assets/pik.jpg',
      fecha: '2019-04-10',
      trailer: '1Tyo-q0exy6iRmwF3uAq9ZPnG_YApEYwq/preview',
      drive: '1awgJctSr_9EhrHHqrl7Rx7HS6DefR3Yy/preview'
    },
    {
      idx : 4,
      titulo: 'thor 1',
      short: 'thor 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Woody, Buzz Lightyear y el resto de la pandilla se embarcan en un viaje por carretera con Bonnie y un nuevo juguete llamado Forky. El viaje aventurero se convierte en una reunión inesperada cuando el pequeño desvío de Woody lo lleva a su amigo Bo Peep, perdido hace mucho tiempo. Mientras Woody y Bo discuten los viejos tiempos, pronto comienzan a darse cuenta de que están separados por dos mundos cuando se trata de lo que quieren de la vida como un juguete.',
      img: 'assets/toy4.jpg',
      fecha: '2019-06-21',
      trailer: '1pOAUEYx3QG3bdrRvgSwjDzml9Gc72JYc/preview',
      drive: '1FdkIicO8Sp8kFkH0sqZN1R2rYjNqxx_d/preview'
    },
    {
      idx : 5,
      titulo: 'los vengadores 1',
      short: 'los vengadores',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 6,
      titulo: 'iron man 3',
      short: 'iron man 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 7,
      titulo: 'capitan américa 2',
      short: 'capitan américa y el soldado del invierno',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 8,
      titulo: 'Iron man',
      short: 'iron man',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Tony Stark Genio, multimillonario, playboy, filántropo. Hijo del legendario inventor y contratista de armas Howard Stark. Cuando se le asigna a Tony Stark una presentación de armas a una unidad iraquí dirigida por el teniente coronel James Rhodes, se le da un paseo en las líneas enemigas. Ese viaje termina mal cuando el Humvee de Stark en el que viaja está atacado por combatientes enemigos. Sobrevive, apenas, con un cofre lleno de metralla y una batería de automóvil unida a su corazón. Para sobrevivir, se le ocurre una forma de miniaturizar la batería y descubre que la batería puede alimentar algo más. Así nace Iron Man. Utiliza el dispositivo primitivo para escapar de la cueva en Iraq. Una vez en casa, comienza a trabajar para perfeccionar el traje de Iron Man. Pero el hombre que fue puesto a cargo de Stark Industries tiene sus propios planes para hacerse cargo de Tony',
      img: 'assets/marvel2.jpg',
      fecha: '2008-04-30',
      trailer: '1b4LYXfKZ42U-2bqTYj74xrhdWiI2arxW/preview',
      drive: '1zV_Eiv1otSiDIrur9uuRGJSdhUEwfIca/preview'
    },
    {
      idx : 9,
      titulo: 'guardianes de la galaxia',
      short: 'guardianes de la galaxia',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 10,
      titulo: 'los vengadores 2',
      short: 'los vengadores la era de ultron',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 11,
      titulo: 'ant-man',
      short: 'ant-man',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 12,
      titulo: 'capitan américa 3',
      short: 'capitan américa civil war',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 13,
      titulo: 'spiderman 1',
      short: 'spiderman home comming',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 14,
      titulo: 'doctor strange',
      short: 'doctor strange',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 15,
      titulo: 'hulk',
      short: 'El increíble Hulk',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Representando los eventos después de la Bomba Gamma.The Incredible Hulk cuenta la historia del Dr. Bruce Banner, quien busca una cura para su condición única, lo que lo convierte en un monstruo verde gigante bajo estrés emocional. Mientras huye del ejército que busca su captura, Banner se acerca a una cura. Pero todo se pierde cuando emerge una nueva criatura; La abominación.',
      img: 'assets/marvel3.jpg',
      fecha: '2008-06-20',
      trailer: '1JQG4VaFCtkCsq1tJLu4MmBeoOf4WWtKT/preview',
      drive: '1NjP63VFuMrvt1L4TNfqxByAlJkWCcrzD/preview'
    },
    {
      idx : 16,
      titulo: 'guardianes de la galaxia vol2',
      short: 'guardianes de la galaxia vol2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 17,
      titulo: 'thor 3',
      short: 'thor un mundo oscuro',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 18,
      titulo: 'ant-man 2',
      short: 'ant-man and the wasp',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 19,
      titulo: 'avengers 3',
      short: 'avengers infinity war',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 19,
      titulo: 'capitana marvel',
      short: 'capitana marvel',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 20,
      titulo: 'avengers end game',
      short: 'avengers end game',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
  ];
  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  getPelicula( idx: string ) {
    return this.peliculas[idx];
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

