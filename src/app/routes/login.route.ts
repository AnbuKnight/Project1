import { Routes } from '@angular/router';
import { DatasetsComponent } from '../dashboard/components/datasets/datasets.component';
import { DatatSetSummaryComponent } from '../dashboard/components/datat-set-summary/datat-set-summary.component';
import { SigninComponent } from '../login/components/signin/signin.component';
import { UnauthorizedComponent } from '../login/components/unauthorized/unauthorized.component';

export const LOGIN_ROUTES: Routes = [
     { path: '', component: SigninComponent },
     { path: 'unauthorized', component: UnauthorizedComponent },
  ];