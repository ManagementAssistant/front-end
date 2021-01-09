import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private ngClassValue: boolean = false;

  constructor() { }

  inputsClass(){
    return { 'has-val': this.ngClassValue }
  }

  onBlur(e: any){
    let onValue: string = e.target.value.trim();
    if (onValue != "") {
        this.ngClassValue = true;
    }
    else{
        this.ngClassValue = false;
    }
  }

  ngOnInit(): void {
  }

}
