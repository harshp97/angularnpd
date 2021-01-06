import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrDatagrid } from "@clr/angular";
import { RECORDS } from './record';
import { MatDialog } from '@angular/material/dialog';
import { ModalGridComponent } from '../modal-grid/modal-grid.component';
import { ModalGridDelComponent } from '../modal-grid-del/modal-grid-del.component';

@Component({
  selector: 'app-data-gr',
  templateUrl: './data-gr.component.html',
  styleUrls: ['./data-gr.component.css']
})
export class DataGrComponent implements OnInit {
  @ViewChild('dg', {static: true}) datagrid: ClrDatagrid;


  records = RECORDS;
  selected: any = [];
  selectedRecord: any =[];
  temp: any = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalGridComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogdel() {
    const dialogRef = this.dialog.open(ModalGridDelComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public selectAllsetSelected(): void {
    // updates this.datagrid.selectedChanged multiple times as the number of users
      for (let record of this.records) {
          if (!this.datagrid.selection.isSelected(record)) {
              this.datagrid.selection.setSelected(record, true);
            
          }
      }
  }

  public selectAllupdateCurrent(): void {
    // updates this.datagrid.selectedChanged once
      this.datagrid.selection.updateCurrent(this.records, true);
  }

  clearSelection() {
    this.datagrid.selection.current = [];
  }

}
