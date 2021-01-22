import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { Router } from '@angular/router';


@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  dataSource: any;
  displayedColumns = [];
  selectedgroup: string = '';
  selectedprivacy: string = '';
  selecteddepartment: string = '';
  description: string = '';
  columnNames = [{
    id: 'column1',
    value: '',
  }, {
    id: 'DatasetName',
    value: 'Dataset Name',
  }, {
    id: 'Filesize',
    value: 'File size',
  },
  {
    id: 'LastUpdatedDate',
    value: 'Last Updated Date',
  },
  {
    id: 'Dependency',
    value: 'Dependency',
  },
  {
    id: 'Accuracy',
    value: 'Accuracy(%)',
  },
  {
    id: 'Action',
    value: 'Action',
  }];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  paginatorProperties = {
    length: 3,
    pageSize: 10,
    pageIndex: 1
  };
  EmitResult = {
    pageNumber: '',
    pageSize: ''
  };
  testPaginator = {
    length: 1000,
    pageSize: 3,
    pageIndex: 1
  };
  paginationInfo;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService, private router: Router) { }

  setPageSizeOptions = (setPageSizeOptionsInput: string) => {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPageEvent = ($event) => {
    // this.EmitResult =  {
    //   pageNumber: $event.pageIndex,
    //   pageSize: $event.pageSize
    // };
  }
  showTestEmit = ($event) => {
    this.EmitResult = {
      pageNumber: $event.pageIndex,
      pageSize: $event.pageSize
    };
  }

  // getPageDetails = () => {
  //   this.paginationInfo=this.paginatorProperties
  //   // this.getPageSize().subscribe( res => {
  //   //   this.paginationInfo = res;
  //   //   //this.getData(0, this.paginationInfo.pageSize);
  //   // });
  // }

  // getData = (pg, lmt) => {
  //   return this.allProjects(pg, lmt).subscribe( res => {
  //     this.tableData = res;
  //   });
  // }

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
    const breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Level 2 ' };
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createTable() {
    let tableArr: Element[] = [{ DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy: 90 },
    { DatasetName: 'mc/membem', Filesize: 50, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 0, Accuracy: 20 },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 9, Accuracy: 40 },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy: 90 },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy: 90 },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 9, Accuracy: 40 },
    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }

  loadSummary(event: any) {
    this.router.navigateByUrl('/dashboard');
  }

  public showDialog: boolean = false;
  public visibleAnimate = false;
  public openDialog() {
    this.showDialog = true;
    setTimeout(() => this.visibleAnimate = true, 0);
  }
  hide() {
    this.visibleAnimate = false;
    setTimeout(() => this.showDialog = false, 0);
  }

  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadFile() {

  }

  groups: any = [
    {
      id: 1,
      value: "Group1"
    },
    {
      id: 2,
      value: "Group2"
    },
    {
      id: 3,
      value: "Group3"
    }
  ];
  privacies: any = [
    {
      id: 1,
      value: "Privacy1"
    },
    {
      id: 2,
      value: "Privacy2"
    },
    {
      id: 3,
      value: "Privacy3"
    }
  ];
  departments: any = [
    {
      id: 1,
      value: "Department1"
    },
    {
      id: 2,
      value: "Department2"
    },
    {
      id: 3,
      value: "Department3"
    }
  ];

}
export interface Element {
  DatasetName: string,
  Filesize: number,
  LastUpdatedDate: string,
  Dependency: number,
  Accuracy: number,
}

