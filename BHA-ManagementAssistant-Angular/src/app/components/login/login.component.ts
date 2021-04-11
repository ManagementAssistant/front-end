import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base-component';
import { StylesOptions } from 'src/app/models/styles-options';
import { FormBuilder } from '@angular/forms';
import { enterKey } from 'src/app/core/constant/key-constant';
import { LoginService } from 'src/app/services/login-service';
import { AuthenticationModel } from 'src/app/models/login/authentication-model';
import { LoginType } from 'src/app/enums/login-type-enum';

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
  private _loginService?: LoginService;

  constructor(viewContainerRef: ViewContainerRef, private _formBuilder: FormBuilder) {
    super(viewContainerRef)
    this.injectServices();
  }

  protected runDefaultTasks(): void {
    super.runDefaultTasks();

    this.cssOptions.padding = ['', '', '', '10px', ''];
  }

  private injectServices(): void {
    this._loginService = this.injector.get<LoginService>(LoginService);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    let authenticationModel: AuthenticationModel = new AuthenticationModel();
    authenticationModel.UserName = this.withUserNameForm.value.username;
    authenticationModel.UserPassword = this.withUserNameForm.value.userpassword;
    authenticationModel.LoginType = LoginType.UserNameAndPassword;
    this._loginService?.login(authenticationModel);
  }

  ngAfterViewInit(): void {
  }

}
