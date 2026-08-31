import { LiveBoardType, LiveFlight } from '../types/liveBoard.types';

type LiveBoardFlightsByType = Record<LiveBoardType, LiveFlight[]>;

export const LIVE_BOARD_MOCKS: Record<string, LiveBoardFlightsByType> = {
  LIM: {
    DEPARTURES: [
      {
        id: 'lim-departure-la2040',
        flightNumber: 'LA2040',
        airline: 'LATAM Airlines',
        locationLabel: 'Cusco (CUZ)',
        scheduledTime: '08:30',
        estimatedTime: '08:30',
        gate: '14',
        terminal: 'T1',
        status: 'BOARDING',
      },
      {
        id: 'lim-departure-h25110',
        flightNumber: 'H25110',
        airline: 'Sky Airline',
        locationLabel: 'Arequipa (AQP)',
        scheduledTime: '09:10',
        estimatedTime: '09:10',
        gate: '06',
        terminal: 'T1',
        status: 'SCHEDULED',
      },
      {
        id: 'lim-departure-ja723',
        flightNumber: 'JA723',
        airline: 'JetSMART',
        locationLabel: 'Santiago (SCL)',
        scheduledTime: '10:15',
        estimatedTime: '10:55',
        gate: '21',
        terminal: 'T1',
        status: 'DELAYED',
        delayMinutes: 40,
      },
    ],
    ARRIVALS: [
      {
        id: 'lim-arrival-av811',
        flightNumber: 'AV811',
        airline: 'Avianca',
        locationLabel: 'Bogotá (BOG)',
        scheduledTime: '07:45',
        estimatedTime: '07:45',
        gate: '09',
        terminal: 'T1',
        status: 'LANDED',
      },
      {
        id: 'lim-arrival-la2051',
        flightNumber: 'LA2051',
        airline: 'LATAM Airlines',
        locationLabel: 'Piura (PIU)',
        scheduledTime: '08:55',
        estimatedTime: '08:55',
        gate: '11',
        terminal: 'T1',
        status: 'SCHEDULED',
      },
      {
        id: 'lim-arrival-ib6651',
        flightNumber: 'IB6651',
        airline: 'Iberia',
        locationLabel: 'Madrid (MAD)',
        scheduledTime: '11:20',
        estimatedTime: '11:20',
        gate: '—',
        terminal: 'T1',
        status: 'CANCELLED',
      },
    ],
  },
};
