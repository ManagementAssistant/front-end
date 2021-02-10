import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { InputDirective } from './core/directives/input.directive';
import { MatInputComponent } from './layout/components/mat-input/mat-input.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const localizationPrefix: string = "/assets/localization/";
// http://localhost:4200/assets/i18n/tr.json

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, localizationPrefix);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RouteNotFoundComponent,
    LoginComponent,
    InputDirective,
    MatInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    //#region Angular Material Modules
    MatButtonModule,
    MatInputModule,
    MatIconModule
    //#endregion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
