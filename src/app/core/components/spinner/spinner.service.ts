import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SpinnerMetaInfo } from './spinner-meta-info.model';


@Injectable()
export class SpinnerService {
  public static fullLoadingCount = 0;

  private spinnerInfoStream: Subject<SpinnerMetaInfo> = new Subject<SpinnerMetaInfo>();
  getSpinnerInfo  = this.spinnerInfoStream.asObservable();
  private spinnerInfo;
  constructor() { }

  set SpinnerInfo(value) {
    this.spinnerInfo = value;
    this.spinnerInfoStream.next(this.spinnerInfo);
  }

  get SpinnerInfo() {
    return this.spinnerInfo;
  }

  clearSpinnerInfo() {
    this.spinnerInfo = null;
  }
/*
  getSpinnerCount(): number {
    return SpinnerService.fullLoadingCount;
  } */

  showSpinner(): void {
    SpinnerService.fullLoadingCount++;
    const serviceMetaInfo: SpinnerMetaInfo = new SpinnerMetaInfo();
    serviceMetaInfo.fullLoadingCount = SpinnerService.fullLoadingCount;
    this.SpinnerInfo = serviceMetaInfo;
  }

  hideSpinner(): void {
    SpinnerService.fullLoadingCount--;
    const serviceMetaInfo: SpinnerMetaInfo = new SpinnerMetaInfo();
    serviceMetaInfo.fullLoadingCount = SpinnerService.fullLoadingCount;
    this.SpinnerInfo = serviceMetaInfo;
  }

}
