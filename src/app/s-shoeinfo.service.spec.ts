import { TestBed } from '@angular/core/testing';

import { SShoeinfoService } from './s-shoeinfo.service';

describe('SCarinfoService', () => {
  let service: SShoeinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SShoeinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
