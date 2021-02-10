import { Component, OnInit, ViewContainerRef, AfterViewInit, ElementRef, Input } from '@angular/core';
import { BaseInputComponent } from 'src/app/core/components/base-input-component';
import { zero } from 'src/app/core/constant/number-constant';
import { StylesOptions } from 'src/app/models/styles-options';
import { isExpressionBlank, isNullOrUndefined } from 'src/app/Utilities/Helpers';

@Component({
  selector: 'mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent extends BaseInputComponent implements OnInit, AfterViewInit {

  @Input('stylesOptions')
  public stylesOptions?: StylesOptions;

  public styles: string = '';

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
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