import { AfterViewInit, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormControlValidation } from "src/app/models/form-control-validation";
import { isEmpty, isExpressionBlank } from "src/app/Utilities/Helpers";
import { BaseComponent } from "./base-component";
import { ValidatorFn } from "@angular/forms";

@Directive()
export abstract class BaseButtonComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
  }

  runDefaultTasks(): void {
    super.runDefaultTasks();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

}