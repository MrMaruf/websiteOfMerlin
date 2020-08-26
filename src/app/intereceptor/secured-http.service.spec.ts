import { TestBed } from '@angular/core/testing';

import { SecuredHttpService } from './secured-http.service';

describe('SecuredHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecuredHttpService = TestBed.get(SecuredHttpService);
    expect(service).toBeTruthy();
  });
});
