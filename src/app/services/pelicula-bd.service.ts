import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'La vida secreta de tus mascotas 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Max enfrenta algunos cambios importantes después de que su dueña Katie se case y ahora tenga un hijo. En un viaje familiar al campo, Max conoce a un perro de granja llamado Rooster, y ambos intentan superar sus miedos. Mientras tanto, Gidget intenta rescatar el juguete favorito de Max de un apartamento lleno de gatos, y Snowball se embarca en una misión para liberar a un tigre blanco llamado Hu de un circo.',
      img: 'assets/pets2.jpg',
      fecha: '2019-06-07',
      trailer: 'mRbjAXjOcKg',
      drive: '10cdi9GHKjH1Sp0KzK-0LTjM8htEjAInD/preview'
    },
    {
      idx : 1,
      titulo: 'Fast & Furious: Hobbs & Shaw',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El abogado Luke Hobbs y el marginado Deckard Shaw forman una alianza improbable cuando un villano cibernéticamente mejorado amenaza el futuro de la humanidad.',
      img: 'assets/FYF.jpg',
      fecha: '2019-07-01',
      trailer: 'ZstXEsP7c4g',
      drive: '1R8MqgRsa9xfNhIo9JY7r4-3DlnurkT20/preview'
    },
    {
      idx : 2,
      titulo: 'El rey león - The Lion King',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después del asesinato de su padre, un joven príncipe león huye de su reino solo para aprender el verdadero significado de responsabilidad y valentía.',
      img: 'assets/rl.jpg',
      fecha: '2019-07-19',
      trailer: '2ufiKxMAJB8',
      drive: '1VKoP_GHb2RqGxKRuiZfoPK33HIHAYJkz/preview'
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
  titulo: string;
  sinopsis: string;
  img: string;
  fecha: string;
  trailer: string;
  drive: string;
}
