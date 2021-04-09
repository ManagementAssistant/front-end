import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base-component';
import { StylesOptions } from 'src/app/models/styles-options';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  // public formControlValidationArray: FormControlValidation[] = [];
  public cssOptions: StylesOptions = new StylesOptions();
  public withUserNameForm = this._formBuilder.group({
    username: '',
    userpassword: ''
  });

  constructor(viewContainerRef: ViewContainerRef, private _formBuilder: FormBuilder) {
    super(viewContainerRef)
    this.cssOptions.padding = ['', '', '', '10px', ''];
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.withUserNameForm.value);
  }

  ngAfterViewInit(): void {

  }

}
