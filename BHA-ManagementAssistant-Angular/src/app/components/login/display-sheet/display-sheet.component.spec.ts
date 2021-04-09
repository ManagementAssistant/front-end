import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySheetComponent } from './display-sheet.component';

describe('DisplaySheetComponent', () => {
  let component: DisplaySheetComponent;
  let fixture: ComponentFixture<DisplaySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
