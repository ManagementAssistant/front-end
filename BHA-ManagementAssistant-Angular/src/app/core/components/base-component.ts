import { AfterViewInit, Directive, Injector, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { LocalizationService } from "src/app/services/localization-service";

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy, AfterViewInit {

    private _localizationService?: LocalizationService;

    constructor(public viewContainerRef: ViewContainerRef) {
        this.runDefaultTasks();
    }

    protected get injector(): Injector {
        return this.viewContainerRef.injector;
    }

    protected get localizationService(): LocalizationService {
        return this._localizationService = this.injector.get<LocalizationService>(LocalizationService);
    }

    protected runDefaultTasks(): void {
        this.localizationService.setBrowserLang();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
    }
}