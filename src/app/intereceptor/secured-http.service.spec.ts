import { TestBed } from '@angular/core/testing';

import { SecuredHttpInterceptor } from './secured-http.service';

describe('SecuredHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecuredHttpInterceptor = TestBed.get(SecuredHttpInterceptor);
    expect(service).toBeTruthy();
  });
});
