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
import {MatDialogModule} from '@angular/material/dialog';
import {NgxDropzoneModule} from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

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
    MatDialogModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ]
})
export class DashboardModule { }
