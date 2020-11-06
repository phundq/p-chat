import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoDialogData } from './../../../store/model/yes-no-dialog-data.i';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData
  ) { }

  ngOnInit(): void {
  }

  handlerClickYes() {
    this.dialogRef.close(true);

  }
  handlerClickNo() {
    this.dialogRef.close(false);
  }

}
