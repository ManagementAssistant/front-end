import { Component, Injector, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services/base-service';
import { LocalizationService } from 'src/app/services/localization-service';
import { RouterService } from 'src/app/services/router-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseService implements OnInit {

  private _routerService?: RouterService;
  private _localizationService?: LocalizationService;

  constructor(injector: Injector) {
    super(injector);

    this.injectServices();

    this.runDefaultTasks();
  }

  private injectServices(): void {
    this._localizationService = this.injector.get<LocalizationService>(LocalizationService);
    this._routerService = this.injector.get<RouterService>(RouterService);
  }

  private runDefaultTasks(): void {
    this.decider();
    this.localizator();
  }

  private decider(): void {
    this._routerService?.Decider();
  }

  private localizator(): void {
    this._localizationService?.setDefaultLang();
  }

  ngOnInit(): void {
  }

}
