import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
import { MaterialModule } from '../../../material.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SpinnerComponent],
  providers: [SpinnerService],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
