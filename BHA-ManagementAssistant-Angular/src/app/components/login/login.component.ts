import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatInput } from '@angular/material/input/input';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/app/core/components/base-component';
import { LocalizationService } from 'src/app/services/localization-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  private ngClassValue: boolean = false;
  public email: string = 'Email';
  public type: string = 'email';
  public placeHolder: string = 'örnek@bha.com';
  public hint: string = 'Hint';

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef)
  }

  inputsClass() {
    return { 'has-val': this.ngClassValue }
  }

  loginButtonClick(e: any) {
    console.log(e);
  }

  onBlur(e: any) {
    let onValue: string = e.target.value.trim();
    if (onValue != "") {
      this.ngClassValue = true;
    }
    else {
      this.ngClassValue = false;
    }
  }

  ngOnInit(): void {
  }

}
