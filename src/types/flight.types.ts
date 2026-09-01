export interface Airport {
  id: number;
  iataCode: string;
  name: string;
  city: string;
  country: string;
}

export type TravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST_CLASS';
export type TripType = 'ONE_WAY' | 'ROUND_TRIP';

export interface FlightSearchFormData {
  tripType: TripType;
  origin: Airport | null;
  destination: Airport | null;
  departureDate: Date | null;
  returnDate?: Date | null;
  passengers: number;
  travelClass: TravelClass;
}

export interface Airline {
  id: number;
  name: string;
  iataCode: string;
  logoUrl?: string;
}

export interface Flight {
  flightId: string;
  flightNumber: string;
  airline: Airline;
  origin: Pick<Airport, 'iataCode' | 'city'>;
  destination: Pick<Airport, 'iataCode' | 'city'>;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  stopsCount: number;
  basePrice: number;
  currency: string;
  availableSeats: number;
  status: 'SCHEDULED' | 'BOARDING' | 'DELAYED' | 'CANCELLED';
}
