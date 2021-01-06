import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
