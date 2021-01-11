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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import{SharedModule} from '../shared/shared.module';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";

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
    MatButtonToggleModule,
    SharedModule,
    NgDynamicBreadcrumbModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ]
})
export class DashboardModule { }
