import { Segment } from "./segment.model";

export class Trip {
    id: string;
    segments: Segment[];
    averagePrice: number;
    currencySymbol: string;
}