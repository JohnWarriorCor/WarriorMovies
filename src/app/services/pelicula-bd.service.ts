import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'Hobbs & Shaw',
      short: 'Fast & Furious: Hobbs & Shaw',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El abogado Luke Hobbs y el marginado Deckard Shaw forman una alianza improbable cuando un villano cibernéticamente mejorado amenaza el futuro de la humanidad.',
      img: 'assets/FYF.jpg',
      fecha: '2019-07-01',
      trailer: '1qokthe74c-Ng9uGe9xljTyQw526UZnPS/preview',
      drive: '1R8MqgRsa9xfNhIo9JY7r4-3DlnurkT20/preview'
    },
    {
      idx : 1,
      titulo: 'PETS 2',
      short: 'LA VIDA SECRETA DE TUS MASCOTAS',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Max enfrenta algunos cambios importantes después de que su dueña Katie se case y ahora tenga un hijo. En un viaje familiar al campo, Max conoce a un perro de granja llamado Rooster, y ambos intentan superar sus miedos. Mientras tanto, Gidget intenta rescatar el juguete favorito de Max de un apartamento lleno de gatos, y Snowball se embarca en una misión para liberar a un tigre blanco llamado Hu de un circo.',
      img: 'assets/pets2.jpg',
      fecha: '2019-06-07',
      trailer: '1b4LYXfKZ42U-2bqTYj74xrhdWiI2arxW/preview',
      drive: '10cdi9GHKjH1Sp0KzK-0LTjM8htEjAInD/preview'
    },
    {
      idx : 2,
      titulo: 'El rey león',
      short: 'El rey león',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después del asesinato de su padre, un joven príncipe león huye de su reino solo para aprender el verdadero significado de responsabilidad y valentía.',
      img: 'assets/rl.jpg',
      fecha: '2019-07-19',
      trailer: '1JQG4VaFCtkCsq1tJLu4MmBeoOf4WWtKT/preview',
      drive: '1VKoP_GHb2RqGxKRuiZfoPK33HIHAYJkz/preview'
    },
    {
      idx : 3,
      titulo: 'Dectetive Pikachu',
      short: 'Pokémon: Detective Pikachu',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La historia comienza cuando el detective Harry Goodman desaparece misteriosamente, lo que lleva a su hijo Tim de 21 años a averiguar qué sucedió. Ayudando en la investigación está el antiguo compañero Pokémon de Harry, el Detective Pikachu: un súper detective adorable, hilarante y sabio que es un misterio incluso para sí mismo. Al descubrir que están equipados de manera única para comunicarse entre sí, Tim y Pikachu unen fuerzas en una emocionante aventura para desentrañar el misterio enredado. Persiguiendo pistas por las calles iluminadas con neón de Ryme City, una metrópolis moderna y extensa donde los humanos y los Pokémon viven codo con codo en un mundo hiperrealista de acción en vivo, se encuentran con un elenco diverso de personajes Pokémon y descubren un impactante trama que podría destruir esta coexistencia pacífica y amenazar a todo el universo Pokémon.',
      img: 'assets/pik.jpg',
      fecha: '2019-04-10',
      trailer: '1Tyo-q0exy6iRmwF3uAq9ZPnG_YApEYwq/preview',
      drive: '1awgJctSr_9EhrHHqrl7Rx7HS6DefR3Yy/preview'
    },
    {
      idx : 4,
      titulo: 'Toy Story 4',
      short: 'Toy Story 4',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Woody, Buzz Lightyear y el resto de la pandilla se embarcan en un viaje por carretera con Bonnie y un nuevo juguete llamado Forky. El viaje aventurero se convierte en una reunión inesperada cuando el pequeño desvío de Woody lo lleva a su amigo Bo Peep, perdido hace mucho tiempo. Mientras Woody y Bo discuten los viejos tiempos, pronto comienzan a darse cuenta de que están separados por dos mundos cuando se trata de lo que quieren de la vida como un juguete.',
      img: 'assets/toy4.jpg',
      fecha: '2019-06-21',
      trailer: '1pOAUEYx3QG3bdrRvgSwjDzml9Gc72JYc/preview',
      drive: '1FdkIicO8Sp8kFkH0sqZN1R2rYjNqxx_d/preview'
    },
    {
      idx : 5,
      titulo: 'Dumbo',
      short: 'Dumbo',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '1CWBvODiDoii-LRrivIBwi29H74eJK3Ew/preview',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 6,
      titulo: 'what man want',
      short: '¿En qué piensan los hombres?',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los agentes deportivos masculinos encerran a una mujer en su profesión, pero adquiere una ventaja inesperada sobre ellos cuando desarrolla la capacidad de escuchar los pensamientos de los hombres.',
      img: 'assets/wmw.jpg',
      fecha: '2019-02-08',
      trailer: '1o85Oxf7e5acfCPXE_olivddE62IDMUOm/preview',
      drive: '1z-FMwaa1jDGFE_U-9bcKd_LjGFpww3em/preview'
    },
    {
      idx : 7,
      titulo: 'A 2 metros de ti',
      short: 'a dos metros de ti',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Stella, de diecisiete años, pasa la mayor parte de su tiempo en el hospital como paciente con fibrosis quística. Su vida está llena de rutinas, límites y autocontrol, todo lo cual se pone a prueba cuando conoce a Will, un adolescente increíblemente encantador que tiene la misma enfermedad. Hay un coqueteo instantáneo, a través de restricciones que dictan que deben mantener una distancia segura entre ellos. A medida que su conexión se intensifica, también lo hace la tentación de tirar las reglas por la ventana y abrazar esa atracción. El amor no tiene límites',
      img: 'assets/2mt.jpg',
      fecha: '2019-09-13',
      trailer: '1quS6SSS9J8UIGM7KxkpJIW1FuJWQ8hwN/preview',
      drive: '12GQtvFjGA50Nfw2KJKYLwFWudPgvLOdW/preview'
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
