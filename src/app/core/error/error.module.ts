import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ErrorService } from './error-service/error.service';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';



@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [PagenotfoundComponent],
  providers: [
    ErrorService,     {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ]
})
export class ErrorModule { }
