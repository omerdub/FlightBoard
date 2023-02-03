import { Airport } from "./airport.model";

export class Leg {
    departurePoint: Airport;
    arrivalPoint: Airport;
    flightNumber: string;
    airlineName: string;
    airlineCode: string;
}