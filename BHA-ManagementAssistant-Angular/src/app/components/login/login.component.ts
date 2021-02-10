import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base-component';
import { FormControlValidation } from 'src/app/models/form-control-validation';
import { StylesOptions } from 'src/app/models/styles-options';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  // public formControlValidationArray: FormControlValidation[] = [];
  public cssOptions: StylesOptions = new StylesOptions();

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef)

    this.cssOptions.padding = ['', '', '', '10px', ''];
    // let formControlValidation: FormControlValidation = new FormControlValidation();
    // formControlValidation.Validator = Validators.email;
    // formControlValidation.Message = "Geçerli bir mail adresi girmelisiniz";
    // this.formControlValidationArray.push(formControlValidation);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
