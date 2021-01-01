import { Injectable } from '@angular/core';
import { AuditInfo } from './audit-Info.model';
import { AppHttpClient } from '../http-client-extension/app-http-client';
import { Observable } from 'rxjs';



@Injectable()
export class AuditLogService {

  constructor(private http: AppHttpClient) { }

  public logAuditMessage(auditMsg: AuditInfo): Observable<any> {
  return ;
}
}

