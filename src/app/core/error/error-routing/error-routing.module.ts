import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from '../..';


const routes: Routes = [
  { path: '**', component: PagenotfoundComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ErrorRoutingModule { }
