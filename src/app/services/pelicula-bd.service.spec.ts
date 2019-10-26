import { TestBed } from '@angular/core/testing';

import { PeliculaBdService } from './pelicula-bd.service';

describe('PeliculaBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaBdService = TestBed.get(PeliculaBdService);
    expect(service).toBeTruthy();
  });
});
