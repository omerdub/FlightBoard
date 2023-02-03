import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/localStorage.service';
import { TripService } from 'src/services/api.service';
import { Trip } from 'src/models/data.models/trip.model';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  theme: string;
  trips: Trip[];

  constructor(
    private localStorageService: LocalStorageService,
    private tripService: TripService
  ) { }

  ngOnInit() {
    this.theme = this.localStorageService.getData('theme') || 'light';
    this.tripService.getTrips().subscribe(res => {
      this.trips = res.trips;
    });
  }

  switchTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.localStorageService.setData('theme', this.theme);
  }
}
