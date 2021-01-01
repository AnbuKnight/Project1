import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SpinnerService } from '../components/spinner/spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    private spinnerService: SpinnerService;
    constructor(
        private injector: Injector
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const hideSpinner = request.headers.get('hideSpinner') || false;
        if (!hideSpinner) {
            this.spinnerService = this.injector.get(SpinnerService);
            this.spinnerService.showSpinner();
            return next.handle(request)
                .pipe(finalize(() => {
                    this.spinnerService.hideSpinner();
                }));
        } else {
            return next.handle(request);
        }
    }
}

