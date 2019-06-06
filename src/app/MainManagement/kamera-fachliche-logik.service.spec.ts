import { TestBed } from '@angular/core/testing';

import { KameraFachlicheLogikService } from './kamera-fachliche-logik.service';

describe('KameraFachlicheLogikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KameraFachlicheLogikService = TestBed.get(KameraFachlicheLogikService);
    expect(service).toBeTruthy();
  });
});
