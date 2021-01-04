import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteComponent } from './components/router/route.component';
import { ServiceModule } from './services/service.module';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
