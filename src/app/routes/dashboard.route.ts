import { Routes } from '@angular/router';
import { DatasetsComponent } from '../dashboard/components/datasets/datasets.component';
import { DatatSetSummaryComponent } from '../dashboard/components/datat-set-summary/datat-set-summary.component';
import { UnauthorizedComponent } from '../login/components/unauthorized/unauthorized.component';

export const DASHBOARD_ROUTES: Routes = [
     { path: 'dataSet', component: DatasetsComponent,
     data: {
      title: 'dataSet',
      breadcrumb: [
        {
          label: 'Home',
          url: ''  
        },
        {
         label: 'Dataset',
         url: '/dataSet'  
       }
      ]
    }  },
     { path: 'dashboard', component: DatatSetSummaryComponent,
     data: {
      title: 'dataSet',
      breadcrumb: [
        {
          label: 'Home',
          url: ''  
        },
        {
         label: 'Dataset',
         url: '/dataSet'  
       },
       {
         label: 'DS Code',
         url: ''  
       },
       {
         label: 'Summary',
         url: ''  
       }
      ]
    }},
     { path: 'unauthorized', component: UnauthorizedComponent },
  ];