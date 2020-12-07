import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from "@angular/router";
import { MessageDialogComponent } from "../dialog/message/message.component";
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { JsontoexcelService } from '../Service/jsontoexcel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[];
  table_data;
  data: any;
  edit_data = {}
  doc_choice = null
  doc_value = ''
  tabIndex = 0

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private excelService: JsontoexcelService) {
  }

  ngOnInit() {
    // this.displayedColumns = ['Client Code', 'First Name', 'Mobile No.', 'Email', 'Test City']
    this.displayedColumns = ['POLICY NO', 'PLAN ID', 'THREAD ID', 'UIN', 'STATUS']
    let data = []
    this.table_data = new MatTableDataSource(data)
    this.edit_data = {}
  }

  ngAfterViewInit() {
    this.httpClient.get("../../assets/data2.json").subscribe(json_data => {
      this.data = json_data
      this.table_data.paginator = this.paginator;
      this.table_data.data = this.data
    });
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>, element) {
    this.tabIndex = 0
    this.edit_data = element
    this.doc_choice = ''
    this.doc_value = ''
    let config = {
      position: {
        top: '0px',
        right: '0px'
      },
      height: '100%',
      width: '100vw',
      panelClass: 'full-screen-modal',
    };
    this.dialog.open(templateRef, config)
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.table_data.filter = filterValue;
  }

  capture() {
    this.tabIndex = 2
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  onNextMethod() {
    if (!this.doc_choice) {
      alert("Please select an ID")
      return
    }
    if (this.doc_choice == 0) {
      this.tabIndex = 1
    }
    if (this.doc_choice == 2 && this.doc_value.length != 12) {
      alert('Please enter valid Aadhaar Card Number')
      return
    }
    if (this.doc_choice == 2 && this.doc_value.length == 12) {
      //TODO api call
      this.tabIndex = 1
    }
  }

  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.data, 'export-to-excel');
  }
}
