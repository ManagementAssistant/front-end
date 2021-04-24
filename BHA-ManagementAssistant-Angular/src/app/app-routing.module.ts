import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { defaultPath, loginPath } from './core/constant/common-constant';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: loginPath,
    component: LoginComponent
  },
  {
    path: defaultPath,
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule),
      },
      {
        path: "**",
        component: RouteNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }