import { FlightDetail } from '../types/flightDetail.types';

export const MOCK_FLIGHT_DETAIL: FlightDetail = {
  id: 'la-2045-detail',
  flightNumber: 'LA 2045',
  aircraftModel: 'Airbus A320',
  dateFormatted: 'Lunes, 15 de Sep 2025',
  airline: {
    id: 'latam',
    name: 'LATAM Airlines',
    code: 'LA',
    colorBadge: 'primary',
  },
  originIata: 'LIM',
  originAirportName: 'Jorge Chávez',
  originCity: 'Lima',
  destinationIata: 'CUZ',
  destinationAirportName: 'Velasco Astete',
  destinationCity: 'Cusco',
  departureTime: '06:30',
  arrivalTime: '07:45',
  durationFormatted: '1h 15min',
  stopsCount: 0,
  stopsFormatted: 'Directo',
  amenitiesAndPolicies: [
    {
      id: 'amenity-1',
      title: 'Equipaje',
      description:
        'Equipaje de mano de 8kg incluido de forma gratuita en cabina. Equipaje facturado en bodega disponible desde S/. 45.',
      iconType: 'baggage',
    },
    {
      id: 'amenity-2',
      title: 'Servicios a bordo',
      description:
        'Conexión Wi-Fi disponible de alta velocidad, snacks de cortesía, bebidas calientes y sistema de entretenimiento streaming.',
      iconType: 'services',
    },
    {
      id: 'amenity-3',
      title: 'Políticas',
      description:
        'Cambios de fecha permitidos desde S/. 80 más diferencia de tarifa. Cancelaciones sujetas a penalidades según tarifa.',
      iconType: 'policies',
    },
  ],
  fareSummary: {
    baseFare: 120,
    baseFareDescription: 'Tarifa base (1 adulto)',
    taxesAndFees: 25,
    totalPrice: 145,
    currency: 'S/.',
  },
  externalBookingUrl: 'https://www.latamairlines.com',
  alternatives: [
    {
      id: 'alt-1',
      airline: { id: 'sky', name: 'Sky Airline', code: 'H2', colorBadge: 'primary' },
      departureTime: '08:30',
      arrivalTime: '09:45',
      durationFormatted: '1h 15m',
      price: 120,
      currency: 'S/.',
    },
    {
      id: 'alt-2',
      airline: { id: 'jetsmart', name: 'JetSMART', code: 'JA', colorBadge: 'primary' },
      departureTime: '13:10',
      arrivalTime: '14:25',
      durationFormatted: '1h 15m',
      price: 135,
      currency: 'S/.',
    },
    {
      id: 'alt-3',
      airline: { id: 'latam-alt', name: 'LATAM Perú', code: 'LA', colorBadge: 'primary' },
      departureTime: '18:50',
      arrivalTime: '20:05',
      durationFormatted: '1h 15m',
      price: 155,
      currency: 'S/.',
    },
  ],
};
