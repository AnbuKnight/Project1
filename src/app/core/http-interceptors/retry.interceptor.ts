import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/retryWhen';
import { delay, retryWhen, scan } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const retry = Number(req.headers.get('retry')) || environment.httpConfig.apiRetryCount;
    return next.handle(req).pipe(
    retryWhen(function (errors) {
      return errors.pipe(scan(function (errorCount, err) {
          if (errorCount > (retry - 1)) {
              throw err;
          }
          console.log('Retry count:' + (errorCount + 1 ));
          return errorCount + 1;
      }, 0), delay(environment.httpConfig.apiRetryIntervalInMilliSeconds));
    }));
  }
}
