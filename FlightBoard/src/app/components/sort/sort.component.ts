import { Component, Input } from '@angular/core';
import { Table } from 'src/models/app.models/table.model';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Input() data: Table;
  sortBy = 'Airline';
  ascending = true;

  sortedData() {
    this.data.data.sort((a, b) => {
      let sortFieldA = a[this.sortBy];
      let sortFieldB = b[this.sortBy];
      if (this.sortBy === 'Price') {
        sortFieldA = parseInt(sortFieldA.replace("$", ""), 10);
        sortFieldB = parseInt(sortFieldB.replace("$", ""), 10);
      }

      if (sortFieldA < sortFieldB) {
        return this.ascending ? -1 : 1;
      } else if (sortFieldA > sortFieldB) {
        return this.ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  ngOnChanges() {
    this.sortedData()
  }

  constructor() { }
}
