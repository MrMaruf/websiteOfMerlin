import { TestBed } from '@angular/core/testing';

import { AbilityResolverService } from './ability-resolver.service';

describe('AbilityResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbilityResolverService = TestBed.get(AbilityResolverService);
    expect(service).toBeTruthy();
  });
});
