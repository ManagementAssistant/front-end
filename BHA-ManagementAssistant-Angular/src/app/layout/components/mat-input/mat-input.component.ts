import { Component, OnInit, ViewContainerRef, AfterViewInit, Input, forwardRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from 'src/app/core/components/base-input-component';
import { zero } from 'src/app/core/constant/number-constant';
import { StylesOptions } from 'src/app/models/styles-options';
import { isExpressionBlank, isNullOrUndefined } from 'src/app/Utilities/Helpers';

@Component({
  selector: 'mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MatInputComponent,
      multi: true
    }
  ]
})
export class MatInputComponent extends BaseInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  onChange: any = () => { };
  onTouched: any = () => { };

  @Input('stylesOptions')
  public stylesOptions?: StylesOptions;

  @ViewChild('input', {static: true, read: ElementRef})
  inputElementRef?: ElementRef;

  public styles: string = '';

  constructor(viewContainerRef: ViewContainerRef, private _renderer: Renderer2) {
    super(viewContainerRef);
  }

  onInputChange() {
    const value = this.inputElementRef?.nativeElement.value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this._renderer.setProperty(this.inputElementRef?.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setCssOptions(): void {
    if (isNullOrUndefined(this.stylesOptions) === false) {
      if (isNullOrUndefined(this.stylesOptions?.width) === false) {
        this.styles += this.createStylesText([this.stylesOptions?.width != null ? this.stylesOptions?.width : ''], 'width');
      }

      if (isNullOrUndefined(this.stylesOptions?.margin) === false) {
        this.styles += this.createStylesText(this.stylesOptions?.margin != null ? this.stylesOptions.margin : [''], 'margin');
      }

      if (isNullOrUndefined(this.stylesOptions?.padding) === false) {
        this.styles += this.createStylesText(this.stylesOptions?.padding != null ? this.stylesOptions.padding : [''], 'padding');
      }
    }
  }

  private createStylesText(values: string[], propName: string): string {
    let text: string = '';
    let directionArray: string[] = ['', '-top', '-right', '-bottom', '-left'];
    if (isNullOrUndefined(values) === false) {
      let index: number = zero;
      values?.forEach(value => {
        if (isNullOrUndefined(value) === false && isExpressionBlank(value) === false) {
          text += propName + directionArray[index] + ': ' + value + '; ';
        }

        index++;
      });
    }

    return text;
  }


  runDefaultTasks(): void {
    super.runDefaultTasks();

    this.setCssOptions();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

}