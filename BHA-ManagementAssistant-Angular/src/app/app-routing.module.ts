import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { RouteComponent } from './components/router/route.component';
import { defaultPath, loginPath } from './core/constant/common-constant';

const routes: Routes = [
  {
    path: defaultPath,
    component: RouteComponent,
    children: [
      {
        path: loginPath,
        component: LoginComponent
      }
    ]
  },
  {
    path: "**",
    component: RouteNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
