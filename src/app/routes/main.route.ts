import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
    { path: '', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ];