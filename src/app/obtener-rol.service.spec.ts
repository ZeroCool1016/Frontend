import { TestBed } from '@angular/core/testing';

import { ObtenerRolService } from './obtener-rol.service';

describe('ObtenerRolService', () => {
  let service: ObtenerRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
