import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { ErrorService } from '../error-service/error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { errorMessages } from '../error-const';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private errorsService: ErrorService;
  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    this.errorsService = this.injector.get(ErrorService);

    if (error instanceof HttpErrorResponse) {
      // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
        this.errorsService.showError('No Internet Connection');
        return console.log('No Internet Connection');
      } else {// This flow will be executed when API responded with an error  and
        // it has been thrown from the intereceptor , left unhandled by the caller
        this.errorsService.showError(errorMessages.HttpUnhandledError);
      }
    } else {
      console.error(error);
      // Client Error Happend
      this.errorsService.handleException(error);
    }
  }
}
