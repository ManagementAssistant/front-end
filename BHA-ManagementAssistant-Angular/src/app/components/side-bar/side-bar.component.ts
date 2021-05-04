import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BaseComponent } from 'src/app/core/components/base-component';
import { zero } from 'src/app/core/constant/number-constant';
import { MenuType } from 'src/app/enums/menu-type-enum';
import { MenuElementModel } from 'src/app/models/entity/menu-element-model';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { MenuElementService } from 'src/app/services/entity/menu-element.service';
import { getEnumKeyWithValue, isNullOrUndefined } from 'src/app/Utilities/Helpers';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent extends BaseComponent implements OnInit {
    @ViewChild('sidenav') sidenav?: MatSidenav;

    //#region materials
    isExpanded = true;
    showSubmenu: boolean = false;
    isShowing = false;
    showSubSubMenu: boolean = false;
    //#endregion

    //#region MenuElements
    menuElementsHeader: string[] = [];
    //#endregion

    //#region Services
    private _authenticationService?: AuthenticationService;
    private _menuElementService?: MenuElementService;
    //#endregion

    constructor(viewContainerRef: ViewContainerRef) {
        super(viewContainerRef);

        this.injectServices();
        this.setDefaultValues();
    }

    private injectServices(): void {
        this._authenticationService = this.injector.get<AuthenticationService>(AuthenticationService);
        this._menuElementService = this.injector.get<MenuElementService>(MenuElementService);
    }

    private setDefaultValues(): void {
        this.setMenuElements();
    }

    private setMenuElements(): void {
        this._menuElementService?.getList().subscribe((response: MenuElementModel[]) => {
            if (response.length > zero) {
                response.map((element: MenuElementModel) => {
                    this.menuElementsHeader.push(getEnumKeyWithValue(element.MenuTypeEnum ? element.MenuTypeEnum : 0, MenuType));
                });
            }
        });
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
