import { TestBed } from '@angular/core/testing';
import { ChapterResolver } from './chapter-resolver.service';

describe('ChapterResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChapterResolver = TestBed.get(ChapterResolver);
    expect(service).toBeTruthy();
  });
});
