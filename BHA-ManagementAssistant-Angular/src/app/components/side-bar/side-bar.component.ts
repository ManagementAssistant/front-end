import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BaseComponent } from 'src/app/core/components/base-component';

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


    constructor(viewContainerRef: ViewContainerRef) {
        super(viewContainerRef);
    }

    ngOnInit(): void {
    }

    mouseenter() {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }

    mouseleave() {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }

}
