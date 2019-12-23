import { TestBed } from '@angular/core/testing';

import { SkillResolverService } from './skill-resolver.service';

describe('SkillResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillResolverService = TestBed.get(SkillResolverService);
    expect(service).toBeTruthy();
  });
});
