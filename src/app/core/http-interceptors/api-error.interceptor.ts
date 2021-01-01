import { Injectable, Injector } from '@angular/core';
import { ErrorService } from '../error/error-service/error.service';
import { skipInterceptor } from '../../constants';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
    private errorService: ErrorService;
    constructor(
        private injector: Injector
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (request.headers.has(skipInterceptor.skipApiErrorInterceptor)) {
            const headers = request.headers.delete(skipInterceptor.skipApiErrorInterceptor);
            return next.handle(request.clone({ headers }));
        } else {
            this.errorService = this.injector.get(ErrorService);
            return next.handle(request).pipe(
                catchError((error) => {
                    // Error response
                    if (error instanceof HttpErrorResponse) {
                        return this.errorService.handleAPIError(error);
                    } else {
                        return Observable.throw(error);
                    }
                }));
        }
    }
}

