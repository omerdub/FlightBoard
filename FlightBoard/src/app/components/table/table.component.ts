import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'src/models/app.models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() table: Table = { columns: [], data: [] };
  @Input() onClick?: (data: any) => void;


  ngOnChanges(changes) {
    console.log(changes)
  }
}
