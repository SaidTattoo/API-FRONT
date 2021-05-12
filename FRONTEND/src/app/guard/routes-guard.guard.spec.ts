import { TestBed } from '@angular/core/testing';

import { RoutesGuardGuard } from './routes-guard.guard';

describe('RoutesGuardGuard', () => {
  let guard: RoutesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
