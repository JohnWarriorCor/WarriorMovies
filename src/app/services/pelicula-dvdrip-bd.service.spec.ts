import { TestBed } from '@angular/core/testing';

import { PeliculaDvdripBdService } from './pelicula-dvdrip-bd.service';

describe('PeliculaDvdripBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaDvdripBdService = TestBed.get(PeliculaDvdripBdService);
    expect(service).toBeTruthy();
  });
});
