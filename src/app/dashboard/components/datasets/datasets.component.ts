import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DashboardModule} from '../../dashboard.module';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  dataSource: any;
  displayedColumns = [];
  columnNames = [{
    id: 'FeatureName',
    value: '',
  }, {
    id: 'Description',
    value: 'Description',
  }, {
    id: 'datatype',
    value: 'Data Type',
  },
  {
    id: 'uniquedata',
    value: 'Unique Data %',
  },
  {
    id: 'MissingData',
    value: 'Missing Data % ',
  },
  {
    id: 'Action',
    value: 'Action',
  }];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createTable() {
    let tableArr: Element[] = [{ FeatureName: '/epistle dataset', Description: 100, datatype: '01/30/2020 12.01 am', uniquedata: 12, MissingData: 90 },
    { FeatureName: 'mc/membem', Description: 50, datatype: '01/30/2020 12.01 am', uniquedata: 0, MissingData: 20 },
    { FeatureName: '/epistle dataset', Description: 100, datatype: '01/30/2020 12.01 am', uniquedata: 9, MissingData: 40 },
    { FeatureName: '/epistle dataset', Description: 100, datatype: '01/30/2020 12.01 am', uniquedata: 12, MissingData: 90 },
    { FeatureName: '/epistle dataset', Description: 100, datatype: '01/30/2020 12.01 am', uniquedata: 12, MissingData: 90 },
    { FeatureName: '/epistle dataset', Description: 100, datatype: '01/30/2020 12.01 am', uniquedata: 9, MissingData: 40 },
    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }

}
export interface Element {
  FeatureName: string,
  Description: number,
  datatype: string,
  uniquedata: number,
  MissingData: number,
}
