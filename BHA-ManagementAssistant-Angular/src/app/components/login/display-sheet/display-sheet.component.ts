import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-display-sheet',
  templateUrl: './display-sheet.component.html',
  styleUrls: ['./display-sheet.component.scss']
})
export class DisplaySheetComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<DisplaySheetComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
