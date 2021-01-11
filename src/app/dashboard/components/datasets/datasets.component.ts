import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {FiltersComponent} from '../../../shared/components/filters/filters.component';
import {SharedModule} from '../../../shared/shared.module';
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
  columnNames = [{
    id: 'column1',
    value: '',
  },{
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService, private router: Router) { }

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
  this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createTable() {
    let tableArr: Element[] = [{ DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy:90  },
    { DatasetName: 'mc/membem', Filesize: 50, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 0, Accuracy:20  },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 9, Accuracy:40 },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy:90  },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 12, Accuracy:90  },
    { DatasetName: '/epistle dataset', Filesize: 100, LastUpdatedDate: '01/30/2020 12.01 am', Dependency: 9, Accuracy:40 },
    ];
    this.dataSource = new MatTableDataSource(tableArr);    
  }

  loadSummary(event:any)
  {
    this.router.navigateByUrl('/dashboard');
  }

}
export interface Element {
  DatasetName: string,
  Filesize: number,
  LastUpdatedDate: string,
  Dependency: number,
  Accuracy:number,
}


