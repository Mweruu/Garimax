import { TestBed } from '@angular/core/testing';

import { DatastorageserviceService } from './datastorageservice.service';

describe('DatastorageserviceService', () => {
  let service: DatastorageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastorageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
