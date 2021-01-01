import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { responseStatusCode } from '../error/error-const';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const timeout = Number(req.headers.get('timeout')) || environment.httpConfig.apiTimeOutInMilliSeconds;
      return next.handle(req).pipe(timeoutWith(timeout, Observable.throw(
        new HttpErrorResponse({
          'error': 'Angular retried for so long to hear from API...timeout exceeded',
          'headers': null,
          'status': responseStatusCode.timeExpiry,
          'statusText': 'Angular retried for so long to hear from API...timeout exceeded',
          'url': req.urlWithParams,
       }))));

    }
  }
