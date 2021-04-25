import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogModel } from 'src/app/models/confirm-dialog/confirm-dialog-model';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel, public dialogRef: MatDialogRef<DialogPopupComponent>) {
  }

  ngOnInit(): void {
  }

  public closedPopup() {
    this.dialogRef.close();
  }
}
