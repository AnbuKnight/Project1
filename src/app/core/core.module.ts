import {   NgModule,
  Optional,
  Inject,
  InjectionToken,
  SkipSelf,
  ErrorHandler
 } from '@angular/core';
 import { throwIfAlreadyLoaded } from './module-import-guard';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {  APP_HTTP_INTERCEPTORS, infraHttpInterceptorProviders,
  INFRA_HTTP_INTERCEPTORS, appHttpInterceptorProviders } from './http-interceptors';
import { SecurityModule } from './security';

import { LoggerModule, NgxLoggerLevel, NGXLoggerHttpService } from 'ngx-logger';
import { AuditLogService } from './audit-log/audit-log.service';
import { LoggerService } from './logger/logger.service';
import { CustomLoggerHttpService } from './logger/custom-logger-http.service';
import { AppHttpClient } from './http-client-extension/app-http-client';
import { HttpBackend, ɵHttpInterceptingHandler } from '@angular/common/http';
import { AppHttpHandler } from './http-client-extension/app-http-handler';
import { ErrorModule } from './error';
import { CorecomponentsModule } from './components/core-components.module';
import { InfraHttpHandler } from './http-client-extension/infra-http-handler';
import { InfraHttpClient } from './http-client-extension/infra-http-client';
import { endPointConfig } from 'src/apiconstants';


@NgModule({
  imports: [
    CommonModule,
    CorecomponentsModule,
    SecurityModule,
    CoreRoutingModule,
    ErrorModule,
    LoggerModule.forRoot({
      serverLoggingUrl: endPointConfig.logAPI, serverLogLevel: NgxLoggerLevel.TRACE,
       level: NgxLoggerLevel.TRACE
      })
  ],
  declarations: [],
  providers: [
    AppHttpClient,
    InfraHttpClient,
    infraHttpInterceptorProviders,
    {
      provide: InfraHttpHandler,
      useFactory: ɵHttpInterceptingHandler,
      deps: [HttpBackend, [new Optional(), new Inject(INFRA_HTTP_INTERCEPTORS)]],
   },
    appHttpInterceptorProviders,
    {
      provide: AppHttpHandler,
      useFactory: ɵHttpInterceptingHandler,
      deps: [HttpBackend, [new Optional(), new Inject(APP_HTTP_INTERCEPTORS)]],
   },
    AuditLogService,
    LoggerService,
    {provide: NGXLoggerHttpService, useClass: CustomLoggerHttpService}
  ],
  exports: [CorecomponentsModule]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
