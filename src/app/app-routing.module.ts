import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './plan/containers';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: containers.PlanComponent },
  { path: 'offers/:id', component: containers.DetailsComponent },
  { path: '**', component: containers.PlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
