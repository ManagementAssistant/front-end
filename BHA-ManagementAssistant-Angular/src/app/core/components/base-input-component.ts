import { AfterViewInit, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormControlValidation } from "src/app/models/form-control-validation";
import { isEmpty, isExpressionBlank } from "src/app/Utilities/Helpers";
import { BaseComponent } from "./base-component";
import { ValidatorFn } from "@angular/forms";

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
  public requiredErrorMessage: string = 'global.required.error.message';

  @Input('autoComplate')
  public autoComplate: boolean = false;

  @Input('formControlValidationArray')
  public formControlValidationArray: FormControlValidation[] = [];

  public formControl: FormControl = new FormControl('', []);

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
  }

  runDefaultTasks(): void {
    super.runDefaultTasks();

    this.createFormControl();
  }

  private createFormControl(): void {

    let validatorArray: ValidatorFn[] = [];

    if (this.isBeValueFormControlValidationArray) {
      this.required = true; //Herhangi bir uyuşmazlık bildirebilmesi için mutlaka zorunlu olmalıdır. --BHA 2021-01-24
    }

    if (this.required) {
      let requiredValidation: FormControlValidation = new FormControlValidation();
      this.localizationService.get(this.requiredErrorMessage).subscribe((message) => requiredValidation.Message = message);
      requiredValidation.Validator = Validators.required;
      this.formControlValidationArray.push(requiredValidation);
    }

    if (this.isBeValueFormControlValidationArray) {
      this.formControlValidationArray.forEach(formControlValidation => {
        validatorArray.push(formControlValidation.Validator ?? Validators.nullValidator);
      });
    }

    if (isEmpty(validatorArray.length) === false) {
      this.formControl.setValidators(validatorArray);
    }
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

  public get isBeValueFormControlValidationArray(): boolean {
    let condition: boolean = false;
    if (isEmpty(this.formControlValidationArray) === false) {
      condition = true;
    }

    return condition;
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