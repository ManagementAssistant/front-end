import { Platform } from '@angular/cdk/platform';
import { ComponentFactoryResolver, Directive, ElementRef, OnInit, Renderer2, ViewContainerRef, ɵConsole } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[Input]'
})
export class InputDirective implements OnInit {

  constructor(private renderer: Renderer2,
    private elmRef: ElementRef<MatInput>) {

  }
  ngOnInit(): void {
    const p = this.renderer.createElement('input');
    
    // const text = this.renderer.createText('I am dynamically created');
    // this.renderer.setAttribute(this.elmRef.nativeElement, '', 'matInput');
    // this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.elmRef.nativeElement, p);
    // this.renderer.createComment("matInput");
  }

}
