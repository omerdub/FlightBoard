import { Trip } from "src/models/data.models/trip.model";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StoreService {
    private _trips = new BehaviorSubject<Trip[]>([]);
    private _tripsToShow = new BehaviorSubject<Trip[]>([]);

    getTrips() {
        return this._trips.asObservable()
    }

    getTripsToShow() {
        return this._tripsToShow.asObservable();
    }

    setTrips(trips: Trip[]) {
        this._trips.next(trips);
    }

    setTripsToShow(trips: Trip[]) {
        this._tripsToShow.next(trips);
    }
}