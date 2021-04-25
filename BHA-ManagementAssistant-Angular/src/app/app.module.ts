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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DisplaySheetComponent } from './components/login/display-sheet/display-sheet.component';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LayoutModule } from './layout/layout.module';
import { JsonInterceptor } from './core/services/http/json.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogPopupComponent } from './components/popup/dialog-popup/dialog-popup.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const localizationPrefix: string = "/assets/localization/";

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
    MatInputComponent,
    DisplaySheetComponent,
    SideBarComponent,
    DialogPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    LayoutModule,
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
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    //#endregion

    //#region Modules
    DashboardModule,
    //#endregion
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
