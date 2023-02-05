import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTripsResponse } from 'src/models/responses.models/getTrips.response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    getTrips(): Observable<GetTripsResponse> {
        return this.http.get<GetTripsResponse>(this.apiUrl + 'flight/search');
    }
}