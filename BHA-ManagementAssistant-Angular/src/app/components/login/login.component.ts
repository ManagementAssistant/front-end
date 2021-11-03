import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base-component';
import { StylesOptions } from 'src/app/models/styles-options';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationModel } from 'src/app/models/login/authentication-model';
import { LoginType } from 'src/app/enums/login-type-enum';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends BaseComponent implements OnInit {

  //#region  Materials
  public cssOptions: StylesOptions = new StylesOptions();
  public loginButtonText: string = "";
  public loginButtonDisabled: boolean = false;
  //#endregion

  //#region form
  public withUserNameForm = this._formBuilder.group({
    username: '',
    userpassword: ''
  });
  //#endregion

  //#region Services
  private _authenticatioService?: AuthenticationService;
  //#endregion

  constructor(viewContainerRef: ViewContainerRef, private _formBuilder: FormBuilder) {
    super(viewContainerRef)
    this.injectServices();

    this.runDefaultTasks();
  }

  protected runDefaultTasks(): void {
    super.runDefaultTasks();

    this.cssOptions.padding = ['', '', '', '10px', ''];
    this.localizationService?.get('login.login').subscribe((message) => this.loginButtonText = message);
  }

  private injectServices(): void {
    this._authenticatioService = this.injector.get<AuthenticationService>(AuthenticationService);
  }

  onSubmit() {
    let authenticationModel: AuthenticationModel = new AuthenticationModel();
    authenticationModel.UserName = this.withUserNameForm.value.username;
    authenticationModel.UserPassword = this.withUserNameForm.value.userpassword;
    authenticationModel.LoginType = LoginType.UserNameAndPassword;
    this.loginButtonSetPropBeforeLogin();
    this._authenticatioService?.login(authenticationModel).subscribe(
      (value: void) => {
        this.loginButtonSetPropAfterLogin();
      }
    );
  }

  private loginButtonSetPropBeforeLogin(): void {
    this.localizationService?.get('global.wait').subscribe((message) => this.loginButtonText = message);
    this.loginButtonDisabled = true;
  }

  private loginButtonSetPropAfterLogin(): void {
    this.localizationService?.get('login.login').subscribe((message) => this.loginButtonText = message);
    this.loginButtonDisabled = false;
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }

}
