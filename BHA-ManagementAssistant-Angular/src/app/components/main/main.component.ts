import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Component, Injector, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
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

    splashScreenEl: any;
    player?: AnimationPlayer;

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param _document
     * @param {Router} _router
     */
    constructor(injector: Injector, router: Router, private _animationBuilder: AnimationBuilder) {
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

    hide(): void {
        this.player =
            this._animationBuilder
                .build([
                    style({ opacity: '1' }),
                    animate('400ms ease', style({
                        opacity: '0',
                        zIndex: '-10'
                    }))
                ]).create(this.splashScreenEl);

        setTimeout(() => {
            this.player?.play();
        }, 0);
    }

    ngOnInit(): void {
        this.splashScreenEl = document.body.querySelector('#fuse-splash-screen');
        document.body.classList.add("theme-blue-gray-dark");
        // If the splash screen element exists...
        if (this.splashScreenEl) {
            // Hide it on the first NavigationEnd event
            this.router.events
                .pipe(
                    filter((event => event instanceof NavigationEnd)),
                    take(1)
                )
                .subscribe(() => {
                    setTimeout(() => {
                        this.hide();
                    });
                });
        }

    }

}
