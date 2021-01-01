import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatatSetSummaryComponent } from './components/datat-set-summary/datat-set-summary.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [DashboardComponent, DatatSetSummaryComponent],
  imports: [
    CommonModule,        
    MatTableModule,
    MatCardModule,
    CdkTableModule,
    MatPaginatorModule
  ]
})
export class DashboardModule { }
