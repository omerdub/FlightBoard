import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/models/data.models/trip.model';
import { ApiService } from 'src/services/api.service';
import { LocalStorageService } from 'src/services/localStorage.service';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  theme: string;
  trips: Trip[];
  tripsToShow: Trip[];

  constructor(
    private localStorageService: LocalStorageService,
    private tripService: ApiService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.theme = this.localStorageService.getData('theme') || 'light';
    this.tripService.getTrips().subscribe(res => {
      this.storeService.setTrips(res.trips);
      this.storeService.setTripsToShow(res.trips);
    });
  }
}
