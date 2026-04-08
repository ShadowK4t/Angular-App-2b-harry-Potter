import { TestBed } from '@angular/core/testing';

import { Hp } from './hp';

describe('Hp', () => {
  let service: Hp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
