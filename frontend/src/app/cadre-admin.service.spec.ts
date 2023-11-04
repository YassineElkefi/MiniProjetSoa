import { TestBed } from '@angular/core/testing';

import { CadreAdminService } from './cadre-admin.service';

describe('CadreAdminService', () => {
  let service: CadreAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadreAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
