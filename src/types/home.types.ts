export type TripType = 'ONE_WAY' | 'ROUND_TRIP';
export type TravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';

export interface AirportOption {
  id: number;
  iataCode: string;
  name: string;
  city: string;
  country: string;
}

export interface PopularDestination {
  id: string;
  city: string;
  country: string;
  imageUrl: string;
  description: string;
  priceFrom: number;
  currency: string;
  tripTypeLabel: string;
}

export interface FlightComparisonOption {
  id: string;
  airlineName: string;
  airlineLogoUrl?: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
  durationFormatted: string;
  stopsCount: number;
  flightNumber: string;
}

export interface AiComparisonScenario {
  id: string;
  origin: string;
  destination: string;
  dateFormatted: string;
  modality: string;
  flight1: FlightComparisonOption;
  flight2: FlightComparisonOption;
}

export interface HeroSearchValues {
  tripType: TripType;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  travelClass: TravelClass;
}
