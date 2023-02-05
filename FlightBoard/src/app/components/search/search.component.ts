import { Component, OnInit } from '@angular/core';
import { Leg } from 'src/models/data.models/leg.model';
import { Segment } from 'src/models/data.models/segment.model';
import { Trip } from 'src/models/data.models/trip.model';
import { StoreService } from 'src/services/store.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  trips: Trip[] = [];
  tripsToShow: Trip[] = [];
  airlines: any[];
  stops: any[];
  minPrice: number;
  maxPrice: number;


  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getTrips().subscribe(trips => {
      this.airlines = this.updateAirlines(trips);
      this.stops = this.updateStops(trips);
      this.trips = trips;
      this.tripsToShow = trips;
    })
  }

  onFilterChange() {
    this.tripsToShow = this.filter(this.trips);
    this.storeService.setTripsToShow(this.tripsToShow);
  }

  filter(trips: Trip[]): Trip[] {
    let filterdTrips = JSON.parse(JSON.stringify(trips));
    return filterdTrips.filter(trip => {
      if (!this.priceFilter(trip)) return false;
      trip.segments = this.segmentFilter(trip.segments);
      let passed = false;
      trip.segments.forEach(segment => {
        if (this.stopsFilter(segment)) {
          segment.legs.forEach(leg => {
            if (this.airlinesFilter(leg)) {
              passed = true;
            }
          });
        }
      });
      return passed;
    });
  }

  segmentFilter(segments: Segment[]): Segment[] {
    return segments.filter(segment => {
      let passed = false;
      if (this.stopsFilter(segment)) {
        segment.legs.forEach(leg => {
          if (this.airlinesFilter(leg)) {
            passed = true;
          }
        });
      }
      return passed;
    });
  }

  airlinesFilter(leg: Leg): boolean {
    if (!this.isAirlineChecked()) return true;
    for (const airline of this.airlines) {
      if (leg.airlineName === airline.value) {
        return airline.isChecked;
      }
    }
    return false;
  }

  stopsFilter(segment: Segment): boolean {
    if (!this.isStopsChecked()) return true;
    for (const stop of this.stops) {
      if (stop.value === segment.legs.length) {
        return stop.isChecked;
      }
    }
    return false;
  }

  priceFilter(trip: Trip): boolean {
    if (!this.minPrice && (!this.maxPrice || trip.averagePrice <= this.maxPrice)) return true;
    if (!this.maxPrice && (!this.minPrice || trip.averagePrice >= this.minPrice)) return true;
    if (trip.averagePrice >= this.minPrice &&
      trip.averagePrice <= this.maxPrice) return true;
    return false;
  }

  isAirlineChecked(): boolean {
    return this.airlines.some(airline => airline.isChecked === true);
  }

  isStopsChecked(): boolean {
    return this.stops.some(stop => stop.isChecked === true);
  }


  updateAirlines(trips: Trip[]): string[] {
    let newAirlines = [];
    trips.forEach(trip => {
      trip.segments.forEach(segment => {
        segment.legs.forEach(leg => {
          if (!newAirlines.find(airline => airline.value === leg.airlineName)) {
            newAirlines.push({
              value: leg.airlineName,
              isChecked: false,
            });
          }
        });
      });
    });

    return newAirlines.sort((airline_1, airline_2) => airline_1.value.localeCompare(airline_2.value));
  }

  updateStops(trips: Trip[]): number[] {
    let newStops = [];
    trips.forEach(trip => {
      trip.segments.forEach(segment => {
        if (!newStops.find(stop => stop.value === segment.legs.length)) {
          newStops.push({
            value: segment.legs.length,
            isChecked: false,
          });
        }
      });
    });
    return newStops.sort((stop_1, stop_2) => stop_1.value - stop_2.value);
  }
}
