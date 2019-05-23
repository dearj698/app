import { TestBed } from '@angular/core/testing';

import { UserCaseService } from './user-case.service';

describe('UserCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCaseService = TestBed.get(UserCaseService);
    expect(service).toBeTruthy();
  });
});
