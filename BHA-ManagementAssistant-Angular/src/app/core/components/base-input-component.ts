import { AfterViewInit, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { isExpressionBlank } from "src/app/Utilities/Helpers";
import { BaseComponent } from "./base-component";

@Directive()
export abstract class BaseInputComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input('type')
  public type: string = "text";

  @Input('placeHolder')
  public placeHolder: string = '';

  @Input('required')
  public required: boolean = false;

  @Input('label')
  public label: string = '';

  @Input('hint')
  public hint: string = '';

  @Input('requiredErrorMessage')
  public requiredErrorMessage: string = '';

  @Input('autoComplate')
  public autoComplate: boolean = false;

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
  }

  runDefaultTasks(): void {
    super.runDefaultTasks();
  }

  private setRequiredErrorMessage(): void {
    let messagesKey: string = 'global.required.error.message';

    if (this.requiredErrorMessage != '') {
      messagesKey = this.requiredErrorMessage;
    }

    this.localizationService.get(messagesKey).subscribe((message) => this.requiredErrorMessage = message);
  }

  public get isBeValuePlaceHolder(): boolean {
    let condition: boolean = false;
    if (isExpressionBlank(this.placeHolder) === false) {
      condition = true;
    }

    return condition;
  }

  public get isBeValueLabel(): boolean {
    let condition: boolean = false;
    if (isExpressionBlank(this.label) === false) {
      condition = true;
    }

    return condition;
  }

  public get isBeValueHint(): boolean {
    let condition: boolean = false;
    if (isExpressionBlank(this.hint) === false) {
      condition = true;
    }

    return condition;
  }

  public get isBeValueRequiredErrorMessage(): boolean {
    let condition: boolean = false;
    if (isExpressionBlank(this.requiredErrorMessage) === false) {
      condition = true;
    }

    return condition;
  }


  ngOnInit() {
    super.ngOnInit();

    this.setRequiredErrorMessage();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

}