import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfraHttpClient } from '../http-client-extension/infra-http-client';
import { LogLevelEnum } from './log-level.enum';

@Injectable()
export class CustomLoggerHttpService {

  constructor(private http: InfraHttpClient) { }

  logOnServer(url: string, message: string, additional: any[]): Observable<any> {
    const log = {
      'message': message,
      'additional': additional
    };

    const body = {
      logInfo: JSON.stringify(log),
      logLevel: LogLevelEnum
    }
    return this.http.Post(url, body);
  }
}
