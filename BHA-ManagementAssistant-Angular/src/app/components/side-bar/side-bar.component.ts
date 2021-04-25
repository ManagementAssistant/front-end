import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BaseComponent } from 'src/app/core/components/base-component';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent extends BaseComponent implements OnInit {
    @ViewChild('sidenav') sidenav?: MatSidenav;
    isExpanded = true;
    showSubmenu: boolean = false;
    isShowing = false;
    showSubSubMenu: boolean = false;

    //#region Services
    private _authenticationService?: AuthenticationService;
    //#endregion

    constructor(viewContainerRef: ViewContainerRef) {
        super(viewContainerRef);

        this.injectServices();
    }

    private injectServices(): void {
        this._authenticationService = this.injector.get<AuthenticationService>(AuthenticationService);
    }

    public mouseenter(): void {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }

    public mouseleave(): void {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }

    public logout(): void {
        this._authenticationService?.logout();
    }

    ngOnInit(): void {
    }
}
