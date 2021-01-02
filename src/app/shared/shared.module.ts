import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/filters/filters.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DatasetsComponent} from '../dashboard/components/datasets/datasets.component';


@NgModule({
  declarations: [ FiltersComponent,NotificationComponent, DatasetsComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  entryComponents: [NotificationComponent],
  providers: [NotificationService]
})
export class SharedModule { }
