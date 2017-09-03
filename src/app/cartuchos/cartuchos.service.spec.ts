import { TestBed, inject } from '@angular/core/testing';

import { CartuchosService } from './cartuchos.service';

describe('CartuchosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartuchosService]
    });
  });

  it('should be created', inject([CartuchosService], (service: CartuchosService) => {
    expect(service).toBeTruthy();
  }));
});
