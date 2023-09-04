import { TestBed } from '@angular/core/testing';

import { ReceiveQRService } from './receive-qr.service';

describe('ReceiveQRService', () => {
  let service: ReceiveQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiveQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
