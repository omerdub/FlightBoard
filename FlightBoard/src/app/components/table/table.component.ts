import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'src/models/app.models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() table: Table = { columns: [], data: [] };
  @Input() onClick?: (data: any) => void;
}
