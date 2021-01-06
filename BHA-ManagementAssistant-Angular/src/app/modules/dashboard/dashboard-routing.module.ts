import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard-routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
