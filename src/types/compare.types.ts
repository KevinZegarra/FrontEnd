import { Airline } from './flight.types';

export interface CompareFlightCardData {
  id: string;
  airline: Airline;
  cabinClass: string;
  routeLabel: string;
  departureTime: string;
  departureIata: string;
  arrivalTime: string;
  arrivalIata: string;
  durationFormatted: string;
  stopsFormatted: string;
  price: number;
  currency: string;
  isCheapest?: boolean;
}

export type SpecValueType = 'text' | 'boolean' | 'price' | 'percentage';

export interface CompareSpecItem {
  id: string;
  factorName: string;
  flightAValue: {
    text: string;
    isPositive?: boolean;
    isNegative?: boolean;
    highlight?: boolean;
    hasCheckIcon?: boolean;
    hasCrossIcon?: boolean;
  };
  flightBValue: {
    text: string;
    isPositive?: boolean;
    isNegative?: boolean;
    highlight?: boolean;
    hasCheckIcon?: boolean;
    hasCrossIcon?: boolean;
  };
}

export interface AIRecommendation {
  recommendedAirlineName: string;
  title: string;
  description: string;
  reasons: {
    id: string;
    highlightText?: string;
    text: string;
  }[];
  disclaimer: string;
}

export interface FlightComparisonData {
  flightA: CompareFlightCardData;
  flightB: CompareFlightCardData;
  specs: CompareSpecItem[];
  recommendation: AIRecommendation;
}
