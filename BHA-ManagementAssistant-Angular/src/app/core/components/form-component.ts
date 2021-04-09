import { AfterViewInit, OnInit, ViewContainerRef } from "@angular/core";
import { BaseComponent } from "./base-component";

export abstract class FormComponent extends BaseComponent implements OnInit, AfterViewInit {
    constructor(viewContainerRef: ViewContainerRef) {
        super(viewContainerRef);
    }
}