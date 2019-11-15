import { TestBed, inject } from '@angular/core/testing';

import { SuggestRestoService } from './suggest-resto.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestRestoService]
    });
  });

  it('should be created', inject([SuggestRestoService], (service: SuggestRestoService) => {
    expect(service).toBeTruthy();
  }));
});
