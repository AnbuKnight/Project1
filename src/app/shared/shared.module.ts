import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { MaterialModule } from '../material.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DatasetsComponent} from '../dashboard/components/datasets/datasets.component';


@NgModule({
  declarations: [HeadersComponent, FiltersComponent,NotificationComponent, DatasetsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  entryComponents: [NotificationComponent],
  providers: [NotificationService]
})
export class SharedModule { }
