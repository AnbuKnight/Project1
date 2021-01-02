import { Routes } from '@angular/router';
import { DatasetsComponent } from '../dashboard/components/datasets/datasets.component';
import { DatatSetSummaryComponent } from '../dashboard/components/datat-set-summary/datat-set-summary.component';
import { UnauthorizedComponent } from '../login/components/unauthorized/unauthorized.component';

export const DASHBOARD_ROUTES: Routes = [
     { path: 'dataSet', component: DatasetsComponent },
     { path: 'dashboard', component: DatatSetSummaryComponent },
     { path: 'unauthorized', component: UnauthorizedComponent },
  ];