import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Table } from 'src/models/app.models/table.model';
import { Leg } from 'src/models/data.models/leg.model';
import { Trip } from 'src/models/data.models/trip.model';
import { ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {

  @Input() trips: Trip[];
  showTrip: boolean[] = [];
  dataTable: Table;
  showModal: boolean = false;
  modalContent: any;

  @ViewChild(ModalComponent) modal: ModalComponent;



  closeModal(): void {
    this.showModal = true;
  }

  ngOnChanges() {
    this.dataTable = this.prepareData();
  }

  clickOnFlight(rowData) {
    this.showModal = !this.showModal;
    this.modalContent = `<app-table [table]="prepareModalData(rowData.legs)"></app-table>`
  }

  toggleShow(): void {
    this.showModal = !this.showModal;
  }

  prepareModalData(legs: Leg[]): Table {
    let table: Table = { columns: [], data: [] };
    table.columns.push("Departure");
    table.columns.push("Arrival");
    table.columns.push("Airline");
    table.columns.push("Flight");

    legs.forEach(leg => {
      table.data.push({
        Departure: `${leg.departurePoint.city} ${leg.departurePoint.dateTime}`,
        Arrival: `${leg.arrivalPoint.city} ${leg.arrivalPoint.dateTime}`,
        Airline: `${leg.airlineName}`,
        Flight: `${leg.flightNumber}`,
      });
    })
    return table;
  }

  prepareData(): Table {
    let table: Table = { columns: [], data: [] };
    table.columns.push("Departure");
    table.columns.push("Arrival");
    table.columns.push("Airline");
    table.columns.push("Price");
    if (!this.trips) return table;
    this.trips.forEach(trip => {
      trip.segments.forEach(segment => {
        table.data.push({
          Departure: `${segment.legs[0].departurePoint.city} ${segment.legs[0].departurePoint.dateTime}`,
          Arrival: `${segment.legs[segment.legs.length - 1].arrivalPoint.city} ${segment.legs[segment.legs.length - 1].arrivalPoint.dateTime}`,
          Airline: `${segment.legs[0].airlineName}`,
          Price: `${trip.currencySymbol}${trip.averagePrice}`,
          Legs: segment.legs,
        });
      });
    });

    return table;
  }
}
