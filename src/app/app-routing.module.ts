import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './plan/containers';

const routes: Routes = [
{ path: 'offers', component: containers.PlanComponent },
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers/:id', component: containers.DetailComponent },
  { path: '**', component: containers.PlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
