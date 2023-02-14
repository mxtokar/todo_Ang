import {TestBed} from '@angular/core/testing';

import {BaseUrlInterceptor} from './baseUrl.interceptor';

describe('UserInterceptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [BaseUrlInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: BaseUrlInterceptor = TestBed.inject(BaseUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
