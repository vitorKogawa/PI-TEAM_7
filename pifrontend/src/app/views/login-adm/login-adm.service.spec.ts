import { TestBed } from '@angular/core/testing';

import { LoginAdmService } from './login-adm.service';

describe('LoginAdmService', () => {
  let service: LoginAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
