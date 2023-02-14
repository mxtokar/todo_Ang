import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl = 'http://localhost:3000';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/api')) {
      const apiReq = req.clone({
        url: `${this.baseUrl}${req.url}`,
      });
      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}
