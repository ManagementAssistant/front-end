import { Component, OnInit, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseInputComponent } from 'src/app/core/components/base-input-component';

@Component({
  selector: 'mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent extends BaseInputComponent implements OnInit, AfterViewInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);

  }

  runDefaultTasks(): void {
    super.runDefaultTasks();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

}
