import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PandemicService } from './pandemic.service';

describe('PandemicService', () => {
  let service: PandemicService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(PandemicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
