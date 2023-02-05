import { Component, OnInit } from '@angular/core';
import { Table } from 'src/models/app.models/table.model';
import { Leg } from 'src/models/data.models/leg.model';
import { Trip } from 'src/models/data.models/trip.model';
import { ModalTableService } from 'src/services/modalTable.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'src/services/store.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  trips: Trip[];
  showTrip: boolean[] = [];
  dataTable: Table;
  showModal: boolean = false;
  modalContent: any;

  constructor(private modalService: ModalTableService, private sanitizer: DomSanitizer, private state: StoreService) { }

  ngOnInit(): void {

    this.state.getTripsToShow().subscribe(trips => {
      this.dataTable = this.prepareData(trips);
    })
  }

  closeModal(): void {
    this.showModal = true;
  }

  clickOnFlight(rowData) {
    rowData.ModalService.open(rowData.ModalDataToShow);
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
        Departure: `${leg.departurePoint.city} ${new Date(leg.departurePoint.dateTime).toLocaleDateString()}`,
        Arrival: `${leg.arrivalPoint.city} ${new Date(leg.arrivalPoint.dateTime).toLocaleDateString()}`,
        Airline: `${leg.airlineName}`,
        Flight: `${leg.flightNumber}`,
      });
    })
    return table;
  }

  prepareData(trips: Trip[]): Table {
    let table: Table = { columns: [], data: [] };
    table.columns.push("Departure");
    table.columns.push("Arrival");
    table.columns.push("Airline");
    table.columns.push("Price");
    if (!trips) return table;
    let i = 0;
    trips.forEach(trip => {
      trip.segments.forEach(segment => {
        table.data.push({
          Departure: `${segment.legs[0].departurePoint.city} ${new Date(segment.legs[0].departurePoint.dateTime).toLocaleDateString()}`,
          Arrival: `${segment.legs[segment.legs.length - 1].arrivalPoint.city} ${new Date(segment.legs[segment.legs.length - 1].arrivalPoint.dateTime).toLocaleDateString()}`,
          Airline: `${segment.legs[0].airlineName}`,
          Price: `${trip.currencySymbol}${trip.averagePrice}`,
          ModalService: this.modalService,
          ModalDataToShow: this.prepareModalData(segment.legs),
        });
      });
    });

    return table;
  }
}
