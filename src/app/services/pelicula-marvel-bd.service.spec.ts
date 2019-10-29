import { TestBed } from '@angular/core/testing';

import { PeliculaMarvelBdService } from './pelicula-marvel-bd.service';

describe('PeliculaMarvelBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaMarvelBdService = TestBed.get(PeliculaMarvelBdService);
    expect(service).toBeTruthy();
  });
});
