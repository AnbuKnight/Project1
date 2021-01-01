import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { errorMessages, responseStatusCode, oprStatusResponse } from '../error-const';
import { LoggerService } from '../../logger/logger.service';
import { LogData } from '../../logger/log-data.model';
import { LogLevelEnum } from '../../logger/log-level.enum';
import { AuthService } from '../../../core';
import { EMPTY, Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationData, NotificationType } from 'src/app/shared/notification/notification-model';

/**
 * This service is used to handle error scenarios
  */
@Injectable()
export class ErrorService {
  constructor(private injector: Injector,
    private logService: LoggerService,
    private notificationService: NotificationService,
    private authService: AuthService
  ) { }

  logError(error) {
    const errorToSend = this.addContextInfo(error);
    const errorData = new LogData();
    errorData.logInfo = JSON.stringify(errorToSend);
    errorData.logLevel = LogLevelEnum.ERROR;
    this.logService.logMessage(errorData);
  }

  private addContextInfo(error) {
    const name = error.name || null;
    const user = ''; // TODO: User service should map here
    let stack = error instanceof HttpErrorResponse ? null : error.originalStack;
    if (!stack) {
      stack = error.stack; // for angular exceptions
    }

    const apiErrorMessage = error instanceof HttpErrorResponse ? error.error : null;


    const location = this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy
      ? location.path() : '';
    const errorWithContext = {
      'name': name, 'user': user, 'url': url, 'status': status, 'message': message,
      'stack': stack,
      'apiErrorMessage': apiErrorMessage
    };
    return errorWithContext;
  }

  /**
   * This method handles the exceptions thrown in angular code
   * @param error
   */
  handleException(error) {
    this.logError(error);
    this.showErrorWithAutoClose(errorMessages.ExceptionOccur);
  }

  /**
     * this method is used to show the error message with auto close using notification service.
     * @param message
     */
  showErrorWithAutoClose(message) {
    const notificationData = new NotificationData();
    notificationData.message = message || errorMessages.defaultError;
    notificationData.messageType = NotificationType.error;
    notificationData.showButton = true;
    notificationData.buttonText = 'Close';
    notificationData.timeout = 3500;
    this.notificationService.showNotifications(notificationData);
  }

  /**
    * this method is used to show the error message using notification service.
    * @param message
    *
    */
  showError(message) {
    const notificationData = new NotificationData();
    notificationData.message = message || errorMessages.defaultError;
    notificationData.messageType = NotificationType.error;
    notificationData.showButton = true;
    notificationData.buttonText = 'Close';
    this.notificationService.showNotifications(notificationData);
  }

  /**
    * Error handler.
    * @param error
    * @returns {ErrorObservable}
   */
  handleAPIError(error): Observable<any> {
    let errorObservable: Observable<any>;
    let errorDisplayMessage: string;
    switch ((<HttpErrorResponse>error).status) {
      case responseStatusCode.notAuthorized: {// 403
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.NotAuthorized);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        // errorObservable = Observable.throw(error);
        break;
      }
      case responseStatusCode.invalidRequest: {// 400
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.InvalidRequest);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        // errorObservable = Observable.throw(error);
        break;
      }
      case responseStatusCode.notFound: {// 404
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.NotFound);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.connectionRefused:
      case responseStatusCode.serviceUnavailable: {// 0 || 503
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.ServiceUnavailable);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
     /*  case responseStatusCode.serviceUnavailable: {// 503
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.ServiceUnavailable);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      } */
      case responseStatusCode.timeExpiry: {// 504
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.TimeOut);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.conflict: {// 409
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.Conflict);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.internalServerError: {// 500
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.HttpCommonError);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.notImplementedError: {// 501
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.NotImplementedServer);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.badGatewayError: {// 502
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.BadGateway);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      case responseStatusCode.notAuthenticated: {// 401
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.NotAuthenticated);
        this.showError(errorDisplayMessage);
        errorObservable = EMPTY;
        break;
      }
      default: {
        this.logError(error);
        errorDisplayMessage = this.getErrorMessage(error, errorMessages.NotAuthenticated);
        if (errorDisplayMessage === errorMessages.NotAuthenticated) {
          errorObservable = Observable.throw(error);
        } else {
          this.showError(errorDisplayMessage);
          errorObservable = EMPTY;
        }
        break;
      }
    }
    return errorObservable;
  }

  private getErrorMessage(error, defaultMessage): string {
    if (error && error.error && error.error.OprStatus && error.error.OprStatus !== oprStatusResponse.success && error.error.Message) {
      return error.error.Message;
    } else if (error && error.error && error.error.oprStatus && error.error.oprStatus !== oprStatusResponse.success
       && error.error.message) { // Todo: Delete
      return error.error.message;
    } else {
      return defaultMessage;
    }
  }
}

