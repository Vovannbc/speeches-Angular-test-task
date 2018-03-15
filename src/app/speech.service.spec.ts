import { TestBed, inject } from '@angular/core/testing';

import { SpeecService } from './speech.service';

describe('SpeecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeecService]
    });
  });

  it('should be created', inject([SpeecService], (service: SpeecService) => {
    expect(service).toBeTruthy();
  }));
});
