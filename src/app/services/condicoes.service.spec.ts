import { TestBed } from '@angular/core/testing';

import { CondicoesService } from './condicoes.service';

describe('CondicoesService', () => {
  let service: CondicoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
