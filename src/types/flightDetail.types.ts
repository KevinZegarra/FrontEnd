import { Airline } from './flight.types';

export interface AmenityPolicyItem {
  id: string;
  title: string;
  description: string;
  iconType: 'baggage' | 'services' | 'policies';
}

export interface FareBreakdown {
  baseFare: number;
  baseFareDescription: string;
  taxesAndFees: number;
  totalPrice: number;
  currency: string;
}

export interface AlternativeFlight {
  id: string;
  airline: Airline;
  departureTime: string;
  arrivalTime: string;
  durationFormatted: string;
  price: number;
  currency: string;
}

export interface FlightDetail {
  id: string;
  flightNumber: string;
  aircraftModel: string;
  dateFormatted: string;
  airline: Airline;
  originIata: string;
  originAirportName: string;
  originCity: string;
  destinationIata: string;
  destinationAirportName: string;
  destinationCity: string;
  departureTime: string;
  arrivalTime: string;
  durationFormatted: string;
  stopsCount: number;
  stopsFormatted: string;
  amenitiesAndPolicies: AmenityPolicyItem[];
  fareSummary: FareBreakdown;
  externalBookingUrl: string;
  alternatives: AlternativeFlight[];
}
