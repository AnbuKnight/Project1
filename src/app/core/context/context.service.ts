import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContextMetaInfo } from './context-meta-info.model';

@Injectable()
export class ContextService {

  private contextInfoStream: Subject<ContextMetaInfo> = new Subject<ContextMetaInfo>();
  getContextInfo  = this.contextInfoStream.asObservable();
  private contextInfo;
  constructor() { }


  set ContextInfo(value) {
    this.contextInfo = value;
    this.contextInfoStream.next(this.contextInfo);
  }

  get ContextInfo() {
    return this.contextInfo;
  }

  clearContext() {
    this.contextInfo = null;
  }

}
