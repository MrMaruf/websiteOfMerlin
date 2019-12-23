import { TestBed } from '@angular/core/testing';

import { SpellResolverService } from './spell-resolver.service';

describe('SpellResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellResolverService = TestBed.get(SpellResolverService);
    expect(service).toBeTruthy();
  });
});
