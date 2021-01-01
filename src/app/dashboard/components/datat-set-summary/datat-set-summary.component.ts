import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DashboardModule} from '../../dashboard.module';

@Component({
  selector: 'app-datat-set-summary',
  templateUrl: './datat-set-summary.component.html',
  styleUrls: ['./datat-set-summary.component.css']
})
export class DatatSetSummaryComponent implements OnInit {

  constructor() { }
  dataSet = {
    strName: 'Episode Dataset 1',
    strSize: '120 MB',
    strPaths: '1 hdfc/Episode/G1',
    dtCreatedDate: '12/12/2020 12:00 am',
    dtUpdatedDate: '12/12/2020 12:00 am',
    strAccessGroup: 'Episode',
    rows: '100',
    features: '10',
    dependency: '2',
    accuracy: '80'
  }
  dataSource: any;
  displayedColumns = [];
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
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

}
export interface Element {
  DatasetName: string,
  Filesize: number,
  LastUpdatedDate: string,
  Dependency: number,
  Accuracy: number,
}
