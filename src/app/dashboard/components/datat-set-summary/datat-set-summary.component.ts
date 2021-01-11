import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DashboardModule } from '../../dashboard.module';

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
    id: 'FeatureName',
    value: 'Feature Name',
  }, {
    id: 'Description',
    value: 'Description',
  },
  {
    id: 'DataType',
    value: 'Data Type',
  },
  {
    id: 'UniqueData',
    value: 'Unique Data(%)',
  },
  {
    id: 'MissingData',
    value: 'Missing Data(%)',
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
    let tableArr: Element[] = [{ FeatureName: 'Episode ID', Description: 'This as one dataset this is main', DataType: 'Numeric', UniqueData: 100, MissingData: 0 },
    { FeatureName: 'Speceity', Description: 'This as Spailty lode', DataType: 'String', UniqueData: 10, MissingData: 2 },
    { FeatureName: 'Los', Description: 'Length of Stay', DataType: 'Number', UniqueData: 50, MissingData: 10 },

    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }

}
export interface Element {
  FeatureName: string,
  Description: string,
  DataType: string,
  UniqueData: number,
  MissingData: number,
}
