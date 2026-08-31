export type LiveBoardType = 'DEPARTURES' | 'ARRIVALS';

export type LiveFlightStatus =
  | 'SCHEDULED'
  | 'BOARDING'
  | 'DELAYED'
  | 'CANCELLED'
  | 'LANDED';

export interface LiveFlight {
  id: string;
  flightNumber: string;
  airline: string;
  locationLabel: string;
  scheduledTime: string;
  estimatedTime: string;
  gate: string;
  terminal: string;
  status: LiveFlightStatus;
  delayMinutes?: number;
}

export interface LiveBoardQuery {
  airport: string;
  type: LiveBoardType;
}
