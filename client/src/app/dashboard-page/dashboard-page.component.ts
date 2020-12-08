import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MessageDialogComponent } from "../dialog/message/message.component";
import { ModuleService } from '../Service/module.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  curr_projects = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6',
    'Module 7', 'Module 8', 'Module 9', 'Module 10', 'Module 11', 'Module 12',
    'Module 13', 'Module 14', 'Module 15', 'Module 16', 'Module 17', 'Module 18'];
  spliced_data = [];
  page_event = { pageIndex: 0, pageSize: 0 }

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
    private moduleService: ModuleService) {
  }

  ngOnInit() {
    if (this.curr_projects.length <= 6) {
      this.spliced_data = this.curr_projects.slice(0).slice(0, 6);
    }
    else {
      this.spliced_data = this.curr_projects.slice(0).slice(0, 12);
    }
    this.moduleService.getModules().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }

  pageChangeEvent(event) {
    this.page_event.pageIndex = event.pageIndex
    this.page_event.pageSize = event.pageSize
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.spliced_data = this.curr_projects.slice(offset).slice(0, event.pageSize);
  }

  filterProjectName($event) {
    this.spliced_data = this.curr_projects.filter(s => s.includes($event.target.value))
    if (!$event.target.value) {
      console.log(this.page_event)
      const offset = ((this.page_event.pageIndex + 1) - 1) * this.page_event.pageSize;
      this.spliced_data = this.curr_projects.slice(offset).slice(0, this.page_event.pageSize);
    }
  }

  gotoPage(pageName: string, ele: string) {
    sessionStorage.setItem('name', ele)
    this.router.navigate([pageName])
  }

}
