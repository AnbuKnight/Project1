import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatatSetSummaryComponent } from './components/datat-set-summary/datat-set-summary.component';
import {DatasetsComponent} from './components/datasets/datasets.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from '../routes/dashboard.route';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [DashboardComponent, DatatSetSummaryComponent, DatasetsComponent],
  imports: [
    CommonModule,        
    MatTableModule,
    MatCardModule,
    CdkTableModule,
    MatPaginatorModule,    
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ]
})
export class DashboardModule { }
